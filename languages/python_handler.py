"""
Python Language Handler

Implements language-specific operations for Python code using Tree-sitter and Pyright LSP.
"""

from pathlib import Path
from bisect import bisect_right
from typing import List, Tuple
from tree_sitter import Language as TS_Language, Parser, Query, QueryCursor
import tree_sitter_python
import re
import platform
import shutil

from languages.language_handler import LanguageHandler
from core.graph_model import Node, NodeLabel


# Python keyword set for identifier filtering
PY_KEYWORDS = {
    "False", "None", "True", "and", "as", "assert", "async", "await", "break", "class", "continue",
    "def", "del", "elif", "else", "except", "finally", "for", "from", "global", "if", "import",
    "in", "is", "lambda", "nonlocal", "not", "or", "pass", "raise", "return", "try", "while", "with", "yield",
}

IDENT = re.compile(r"[A-Za-z_][A-Za-z0-9_]*")


class PythonHandler(LanguageHandler):
    """Handler for Python language (.py, .pyi files)"""

    def __init__(self):
        super().__init__()
        # Load Python Tree-sitter grammar
        self.language = TS_Language(tree_sitter_python.language())
        self.parser = Parser(self.language)

    def get_file_extensions(self) -> List[str]:
        return ['.py', '.pyi']

    def get_tree_sitter_language(self) -> TS_Language:
        return self.language

    def extract_definitions(self, file_path: str, source_code: str) -> List[Node]:
        """
        Extract Python classes, functions, and methods using Tree-sitter.

        Uses Python-specific AST queries:
        - class_definition with nested function_definition (methods)
        - module-level function_definition (top-level functions)
        - Handles decorated definitions (e.g., @staticmethod, @property)

        Returns:
            List of Node objects with accurate line ranges
        """
        tree = self.parser.parse(source_code.encode('utf-8'))
        root = tree.root_node
        code_bytes = source_code.encode('utf-8')

        def text(node):
            return code_bytes[node.start_byte:node.end_byte].decode('utf-8')

        def first(x):
            return x[0] if isinstance(x, list) else x

        def char_to_line_indices(src: str):
            starts = [0]
            for i, ch in enumerate(src):
                if ch == "\n":
                    starts.append(i + 1)
            return starts

        def byte_to_char_index(byte_idx: int) -> int:
            return len(code_bytes[:byte_idx].decode('utf-8'))

        line_starts = char_to_line_indices(source_code)
        # Use resolved filesystem path (consistent with FILE nodes in code_indexing.py)
        resolved_path = str(Path(file_path).resolve())

        # Compute repo-relative path for stable node IDs
        if self.repo_root:
            try:
                rel_path = Path(file_path).resolve().relative_to(Path(self.repo_root).resolve())
                rel_path_str = str(rel_path).replace("\\", "/")
            except ValueError:
                # File outside repo - use basename as fallback
                rel_path_str = Path(file_path).name
        else:
            # No repo_root set - use basename
            rel_path_str = Path(file_path).name

        # Query for classes with methods
        q_methods = Query(self.language, r"""
        (class_definition
        name: (identifier) @class.name
        body: (block
            [
            (function_definition
                name: (identifier) @method.name) @method.def
            (decorated_definition
                (function_definition
                name: (identifier) @method.name)) @method.def
            ])) @class.def
        """)

        # Query for top-level functions
        q_functions = Query(self.language, r"""
        [
          (module (function_definition name: (identifier) @func.name) @func.def)
          (module (decorated_definition
              (function_definition name: (identifier) @func.name)) @func.def)
        ]
        """)

        nodes: List[Node] = []

        # Helper: stable node IDs (repo-relative, no line numbers)
        def def_id(label: NodeLabel, name: str, class_name: str = "") -> str:
            if class_name:
                # Method: include class name for uniqueness
                return f"{label.value}:{rel_path_str}:{class_name}.{name}"
            else:
                # Class or top-level function
                return f"{label.value}:{rel_path_str}:{name}"

        # Track classes we've seen
        have_class: set[str] = set()

        # Extract classes and methods
        for _, caps in QueryCursor(q_methods).matches(root):
            # Class captures
            cls_name_node = caps["class.name"][0]
            cls_def_node = caps["class.def"][0]

            cls_name = text(cls_name_node)

            c_start_b, c_end_b = cls_def_node.start_byte, cls_def_node.end_byte
            c_start_c, c_end_c = byte_to_char_index(c_start_b), byte_to_char_index(c_end_b)
            # Store 0-indexed line numbers (subtract 1 from bisect_right which returns 1-indexed)
            c_start_line = bisect_right(line_starts, c_start_c) - 1
            c_end_line = bisect_right(line_starts, max(0, c_end_c - 1)) - 1

            class_id = def_id(NodeLabel.CLASS, cls_name)
            if class_id not in have_class:
                nodes.append(Node(
                    id=class_id,
                    label=NodeLabel.CLASS,
                    path=resolved_path,
                    name=cls_name,
                    start_line=c_start_line,
                    end_line=c_end_line,
                ))
                have_class.add(class_id)

            # Method captures — normalize to lists, then iterate pairs
            name_nodes = caps.get("method.name", [])
            def_nodes = caps.get("method.def", [])
            if not isinstance(name_nodes, list):
                name_nodes = [name_nodes] if name_nodes else []
            if not isinstance(def_nodes, list):
                def_nodes = [def_nodes] if def_nodes else []

            for name_node, def_node in zip(name_nodes, def_nodes):
                m_name = text(name_node)

                m_start_b, m_end_b = def_node.start_byte, def_node.end_byte
                m_start_c, m_end_c = byte_to_char_index(m_start_b), byte_to_char_index(m_end_b)
                # Store 0-indexed line numbers
                m_start_line = bisect_right(line_starts, m_start_c) - 1
                m_end_line = bisect_right(line_starts, max(0, m_end_c - 1)) - 1

                method_id = def_id(NodeLabel.METHOD, m_name, class_name=cls_name)
                nodes.append(Node(
                    id=method_id,
                    label=NodeLabel.METHOD,
                    path=resolved_path,
                    name=m_name,
                    start_line=m_start_line,
                    end_line=m_end_line,
                    extra={"class": cls_name},
                ))

        # Extract top-level functions
        cursor = QueryCursor(q_functions)
        for _, caps in cursor.matches(root):
            func_name_node = first(caps["func.name"])
            def_node = first(caps["func.def"])

            f_name = text(func_name_node)
            f_start_b, f_end_b = def_node.start_byte, def_node.end_byte
            f_start_c, f_end_c = byte_to_char_index(f_start_b), byte_to_char_index(f_end_b)
            # Store 0-indexed line numbers
            f_start_line = bisect_right(line_starts, f_start_c) - 1
            f_end_line = bisect_right(line_starts, max(0, f_end_c - 1)) - 1

            func_id = def_id(NodeLabel.FUNCTION, f_name)
            nodes.append(Node(
                id=func_id,
                label=NodeLabel.FUNCTION,
                path=resolved_path,
                name=f_name,
                start_line=f_start_line,
                end_line=f_end_line,
            ))

        return nodes

    def get_lsp_server_command(self) -> List[str]:
        """Return command to launch Pyright LSP server"""
        # Use shutil.which to find the executable in PATH
        cmd = shutil.which('pyright-langserver')

        if not cmd:
            raise FileNotFoundError(
                "pyright-langserver not found. Install with: npm install -g pyright"
            )

        return [cmd, '--stdio']

    def get_lsp_language_id(self) -> str:
        """Return LSP language identifier for Python"""
        return 'python'

    def collect_identifiers(
        self,
        source_code: str,
        start_line: int,
        end_line: int
    ) -> List[Tuple[str, int, int]]:
        """
        Extract identifiers from a Python code range for LSP queries.

        Uses Tree-sitter to extract only identifiers from actual code,
        excluding comments, docstrings, and string literals.

        Args:
            source_code: Full source code of the file
            start_line: Starting line number (0-indexed)
            end_line: Ending line number (0-indexed, inclusive)

        Returns:
            List of (identifier_name, line, column) tuples
        """
        tree = self.parser.parse(source_code.encode('utf-8'))
        root = tree.root_node
        code_bytes = source_code.encode('utf-8')

        # Build line starts (byte positions where each line begins)
        line_starts = [0]
        for i, byte in enumerate(code_bytes):
            if byte == ord('\n'):
                line_starts.append(i + 1)

        out: List[Tuple[str, int, int]] = []
        seen = set()

        def traverse(node):
            # Only process identifier nodes
            if node.type == 'identifier':
                # Check if this identifier is in a call position
                is_call = False
                parent = node.parent

                if parent:
                    # Case 1: Direct function call - func()
                    # AST: call(function: identifier)
                    if parent.type == 'call':
                        func_node = parent.child_by_field_name('function')
                        if func_node == node:
                            is_call = True

                    # Case 2: Attribute access in call - obj.method()
                    # AST: call(function: attribute(attribute: identifier))
                    elif parent.type == 'attribute':
                        attr_node = parent.child_by_field_name('attribute')
                        if attr_node == node:
                            grandparent = parent.parent
                            if grandparent and grandparent.type == 'call':
                                func_node = grandparent.child_by_field_name('function')
                                if func_node == parent:
                                    is_call = True

                # Only collect identifiers that are in call positions
                if not is_call:
                    return

                # Get line number for this identifier
                ident_line = bisect_right(line_starts, node.start_byte) - 1

                # Check if identifier is within our target range
                if start_line <= ident_line <= end_line:
                    name = code_bytes[node.start_byte:node.end_byte].decode('utf-8')

                    # Skip keywords and duplicates
                    if name not in PY_KEYWORDS and name not in seen:
                        seen.add(name)
                        # Calculate column (offset from line start)
                        line_start_byte = line_starts[ident_line] if ident_line < len(line_starts) else 0
                        col = node.start_byte - line_start_byte
                        out.append((name, ident_line, col))

            # Recursively traverse children
            for child in node.children:
                traverse(child)

        traverse(root)
        return out
