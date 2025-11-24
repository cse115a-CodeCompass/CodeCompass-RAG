"""
Class Header Extraction

Extracts class "headers" (class variables + constructor) for vectorization.
This allows us to index class signatures without duplicating method code
(since methods are already vectorized separately).

For Python:
  - Class-level variable assignments
  - __init__ method

For TypeScript/JavaScript:
  - Property declarations (public/private/static)
  - constructor method
"""

from pathlib import Path
from typing import Optional

import tree_sitter_python
import tree_sitter_typescript
from tree_sitter import Language as TS_Language
from tree_sitter import Parser, Query, QueryCursor

from Indexing_Pipeline.core.graph_model import Node


class ClassHeaderExtractor:
    """Extracts class headers (variables + constructor) for vectorization"""

    def __init__(self):
        # Initialize parsers for both languages
        self.py_language = TS_Language(tree_sitter_python.language())
        self.py_parser = Parser(self.py_language)

        self.ts_language = TS_Language(tree_sitter_typescript.language_typescript())
        self.ts_parser = Parser(self.ts_language)

    def extract_header(self, node: Node, source_code: str) -> Optional[str]:
        """
        Extract class header (variables + constructor) for a class node.

        Args:
            node: Class node from the graph
            source_code: Full source code of the file

        Returns:
            String containing class header, or None if extraction fails
        """
        # Determine language from file extension
        path = Path(node.path if not node.path.startswith("file://") else node.path[7:])
        ext = path.suffix.lower()

        if ext in {".py", ".pyi"}:
            return self._extract_python_header(node, source_code)
        elif ext in {".ts", ".tsx", ".js", ".jsx"}:
            return self._extract_typescript_header(node, source_code)
        else:
            return None

    def _extract_python_header(self, node: Node, source_code: str) -> Optional[str]:
        """
        Extract Python class header (class vars + __init__).

        Tree-sitter query strategy:
        1. Find the class_definition matching the node's line range
        2. Extract class-level assignments and type annotations (not inside methods)
        3. Extract __init__ method if present
        """
        tree = self.py_parser.parse(source_code.encode("utf-8"))
        root = tree.root_node
        code_bytes = source_code.encode("utf-8")

        # Graph now stores 0-indexed line numbers (consistent with tree-sitter)
        # Find the class node matching our line range
        class_node = self._find_class_node_python(
            root, node.start_line or 0, node.end_line or 0
        )
        if not class_node:
            # Fallback: return just class signature
            lines = source_code.splitlines()
            start_line = node.start_line or 0
            if start_line < len(lines):
                return lines[start_line].strip()
            return None

        # Get class body
        class_body = None
        for child in class_node.children:
            if child.type == "block":
                class_body = child
                break

        if not class_body:
            return None

        header_parts = []

        # Add class declaration line
        class_start_line = class_node.start_point[0]
        class_signature = source_code.splitlines()[class_start_line].strip()
        header_parts.append(class_signature)

        # Extract class-level assignments, type annotations, and __init__
        init_node = None
        for child in class_body.children:
            child_type = child.type

            # Class-level expressions (type annotations, assignments, etc.)
            if child_type == "expression_statement":
                # Get the first child (the actual expression)
                expr = child.children[0] if child.children else None
                # Include all types of assignments (with or without values)
                if expr and expr.type in {
                    "assignment",
                    "annotated_assignment",
                    "augmented_assignment",
                }:
                    text = code_bytes[child.start_byte : child.end_byte].decode("utf-8")
                    header_parts.append(f"    {text.strip()}")

            # __init__ method
            elif child_type in {"function_definition", "decorated_definition"}:
                func_node = (
                    child
                    if child_type == "function_definition"
                    else child.child_by_field_name("definition")
                )
                if func_node:
                    name_node = func_node.child_by_field_name("name")
                    if name_node:
                        func_name = code_bytes[
                            name_node.start_byte : name_node.end_byte
                        ].decode("utf-8")
                        if func_name == "__init__":
                            init_node = func_node

        # Add __init__ if found
        if init_node:
            init_text = code_bytes[init_node.start_byte : init_node.end_byte].decode(
                "utf-8"
            )
            header_parts.append(f"\n    {init_text}")

        return "\n".join(header_parts) if len(header_parts) > 1 else None

    def _extract_typescript_header(self, node: Node, source_code: str) -> Optional[str]:
        """
        Extract TypeScript/JavaScript class header (properties + constructor).

        Tree-sitter query strategy:
        1. Find the class_declaration matching the node's line range
        2. Extract property declarations
        3. Extract constructor method if present
        """
        # Use appropriate parser for .tsx vs .ts
        path = Path(node.path if not node.path.startswith("file://") else node.path[7:])
        parser = self.ts_parser  # Default to TypeScript

        tree = parser.parse(source_code.encode("utf-8"))
        root = tree.root_node
        code_bytes = source_code.encode("utf-8")

        # Graph now stores 0-indexed line numbers (consistent with tree-sitter)
        # Find the class node matching our line range
        class_node = self._find_class_node_typescript(
            root, node.start_line or 0, node.end_line or 0
        )
        if not class_node:
            # Fallback: return just class signature
            lines = source_code.splitlines()
            start_line = node.start_line or 0
            if start_line < len(lines):
                return lines[start_line].strip()
            return None

        # Get class body
        class_body = None
        for child in class_node.children:
            if child.type == "class_body":
                class_body = child
                break

        if not class_body:
            return None

        header_parts = []

        # Add class declaration line
        class_start_line = class_node.start_point[0]
        class_signature = source_code.splitlines()[class_start_line].strip()
        header_parts.append(class_signature)

        # Extract properties and constructor
        constructor_node = None
        for child in class_body.children:
            # Property declarations (e.g., private foo: string;)
            # Note: TypeScript uses 'public_field_definition' for all field declarations
            if child.type in {"field_definition", "public_field_definition"}:
                text = code_bytes[child.start_byte : child.end_byte].decode("utf-8")
                header_parts.append(f"  {text}")

            # Constructor method
            elif child.type == "method_definition":
                name_node = child.child_by_field_name("name")
                if name_node:
                    method_name = code_bytes[
                        name_node.start_byte : name_node.end_byte
                    ].decode("utf-8")
                    if method_name == "constructor":
                        constructor_node = child

        # Add constructor if found
        if constructor_node:
            constructor_text = code_bytes[
                constructor_node.start_byte : constructor_node.end_byte
            ].decode("utf-8")
            header_parts.append(f"\n  {constructor_text}")

        return "\n".join(header_parts) if len(header_parts) > 1 else None

    def _find_class_node_python(self, root, start_line: int, end_line: int):
        """Find the class_definition node matching the given line range"""

        def traverse(node):
            if node.type == "class_definition":
                node_start = node.start_point[0]
                node_end = node.end_point[0]
                # Match based on line numbers (tree-sitter uses 0-indexed)
                if node_start == start_line and node_end == end_line:
                    return node

            for child in node.children:
                result = traverse(child)
                if result:
                    return result
            return None

        return traverse(root)

    def _find_class_node_typescript(self, root, start_line: int, end_line: int):
        """Find the class_declaration node matching the given line range"""

        def traverse(node):
            if node.type == "class_declaration":
                node_start = node.start_point[0]
                node_end = node.end_point[0]
                # Match based on line numbers
                if node_start == start_line and node_end == end_line:
                    return node

            for child in node.children:
                result = traverse(child)
                if result:
                    return result
            return None

        return traverse(root)
