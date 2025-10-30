from pathlib import Path
from bisect import bisect_right
import os
from langchain_text_splitters import Language, RecursiveCharacterTextSplitter
from langchain_core.documents import Document
from typing import List, Optional, Tuple
from tree_sitter import Language as TS_Language, Parser, Query, QueryCursor
import tree_sitter_python
from graph_model import Graph, Node, NodeLabel

EXT_TO_LANG = {
    ".c": Language.C, ".h": Language.C,
    ".cpp": Language.CPP, ".cc": Language.CPP, ".cxx": Language.CPP,
    ".hpp": Language.CPP, ".hh": Language.CPP, ".hxx": Language.CPP,
    ".cs": Language.CSHARP,
    ".go": Language.GO,
    ".java": Language.JAVA,
    ".kt": Language.KOTLIN, ".kts": Language.KOTLIN,
    ".js": Language.JS, ".mjs": Language.JS, ".cjs": Language.JS, ".jsx": Language.JS,
    ".ts": Language.TS, ".tsx": Language.TS,
    ".php": Language.PHP,
    ".proto": Language.PROTO,
    ".py": Language.PYTHON, ".pyw": Language.PYTHON,
    ".rst": Language.RST,
    ".rb": Language.RUBY,
    ".rs": Language.RUST,
    ".scala": Language.SCALA,
    ".swift": Language.SWIFT,
    ".md": Language.MARKDOWN, ".markdown": Language.MARKDOWN, ".mdx": Language.MARKDOWN,
    ".tex": Language.LATEX, ".ltx": Language.LATEX,
    ".html": Language.HTML, ".htm": Language.HTML,
    ".sol": Language.SOL,
    ".cob": Language.COBOL, ".cbl": Language.COBOL, ".cpy": Language.COBOL,
    ".lua": Language.LUA,
    ".pl": Language.PERL, ".pm": Language.PERL, ".t": Language.PERL,
    ".hs": Language.HASKELL, ".lhs": Language.HASKELL,
    ".ex": Language.ELIXIR, ".exs": Language.ELIXIR,
    ".ps1": Language.POWERSHELL, ".psm1": Language.POWERSHELL, ".psd1": Language.POWERSHELL,
    ".bas": Language.VISUALBASIC6, ".frm": Language.VISUALBASIC6,
    ".cls": Language.VISUALBASIC6, ".vbp": Language.VISUALBASIC6,
}


EXT_TO_LANG_TS = {
    ".py": TS_Language(tree_sitter_python.language()),
}

class CodeChunker:
    """Extracts hierarchical definitions (classes/functions/methods) from a file using Tree-sitter."""
    def __init__(self):
        pass

    def extract_hierarchy(self, code: str, filepath: str) -> Tuple[List[Node], List[Tuple[str, str]]]:
        """
        Returns:
          nodes: definition nodes found in the file (CLASS/FUNCTION/METHOD)
          internal_edges: list of (parent_node_id, child_node_id) for class→method containment
        """
        ext = Path(filepath).suffix.lower()
        if ext not in EXT_TO_LANG_TS:
            return [], []

        ts_lang = EXT_TO_LANG_TS[ext]
        parser = Parser(ts_lang)
        tree = parser.parse(code.encode("utf8"))
        root = tree.root_node

        code_bytes = code.encode("utf8")

        def text(node):
            return code_bytes[node.start_byte:node.end_byte].decode("utf8")

        def first(x):
            return x[0] if isinstance(x, list) else x

        def char_to_line_indices(src: str):
            starts = [0]
            for i, ch in enumerate(src):
                if ch == "\n":
                    starts.append(i + 1)
            return starts

        def byte_to_char_index(byte_idx: int) -> int:
            return len(code_bytes[:byte_idx].decode("utf8"))

        line_starts = char_to_line_indices(code)

        # Queries (Python)
        q_methods = Query(ts_lang, r"""
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

        q_functions = Query(ts_lang, r"""
        [
          (module (function_definition name: (identifier) @func.name) @func.def)
          (module (decorated_definition
              (function_definition name: (identifier) @func.name)) @func.def)
        ]
        """)

        def iter_caps(query, node):
            cursor = QueryCursor(query)
            for _, caps in cursor.matches(node):
                yield caps

        file_uri = Path(filepath).resolve().as_uri()

        # Create CLASS/METHOD nodes (with internal edges class -> method)
        nodes: List[Node] = []
        internal_edges: List[Tuple[str, str]] = []

        # Helper: stable node ids
        def def_id(label: NodeLabel, name: str, start_line: int, end_line: int) -> str:
            return f"{label}:{file_uri}#{start_line}-{end_line}:{name}"

        # Classes + methods (plain methods only)
        have_class: set[str] = set()

        for _, caps in QueryCursor(q_methods).matches(root):
            # Class captures
            cls_name_node = caps["class.name"][0]
            cls_def_node  = caps["class.def"][0]

            cls_name = text(cls_name_node)

            c_start_b, c_end_b = cls_def_node.start_byte, cls_def_node.end_byte
            c_start_c, c_end_c = byte_to_char_index(c_start_b), byte_to_char_index(c_end_b)
            c_start_line = bisect_right(line_starts, c_start_c)
            c_end_line   = bisect_right(line_starts, max(0, c_end_c - 1))

            class_id = def_id(NodeLabel.CLASS, cls_name, c_start_line, c_end_line)
            if class_id not in have_class:
                nodes.append(Node(
                    id=class_id,
                    label=NodeLabel.CLASS,
                    path=file_uri,
                    name=cls_name,
                    start_line=c_start_line,
                    end_line=c_end_line,
                ))
                have_class.add(class_id)

            # Method captures — normalize to lists, then iterate pairs
            name_nodes = caps.get("method.name", [])
            def_nodes  = caps.get("method.def", [])
            if not isinstance(name_nodes, list): name_nodes = [name_nodes] if name_nodes else []
            if not isinstance(def_nodes,  list): def_nodes  = [def_nodes]  if def_nodes  else []

            for name_node, def_node in zip(name_nodes, def_nodes):
                m_name = text(name_node)

                m_start_b, m_end_b = def_node.start_byte, def_node.end_byte
                m_start_c, m_end_c = byte_to_char_index(m_start_b), byte_to_char_index(m_end_b)
                m_start_line = bisect_right(line_starts, m_start_c)
                m_end_line   = bisect_right(line_starts, max(0, m_end_c - 1))

                method_id = def_id(NodeLabel.METHOD, m_name, m_start_line, m_end_line)
                nodes.append(Node(
                    id=method_id,
                    label=NodeLabel.METHOD,
                    path=file_uri,
                    name=m_name,
                    start_line=m_start_line,
                    end_line=m_end_line,
                    extra={"class": cls_name},
                ))
                internal_edges.append((class_id, method_id))


        # Top-level functions
        for caps in iter_caps(q_functions, root):
            func_name_node = first(caps["func.name"])
            def_node = first(caps["func.def"])

            f_name = text(func_name_node)
            f_start_b, f_end_b = def_node.start_byte, def_node.end_byte
            f_start_c, f_end_c = byte_to_char_index(f_start_b), byte_to_char_index(f_end_b)
            f_start_line = bisect_right(line_starts, f_start_c)
            f_end_line = bisect_right(line_starts, max(0, f_end_c - 1))

            func_id = def_id(NodeLabel.FUNCTION, f_name, f_start_line, f_end_line)
            nodes.append(Node(
                id=func_id,
                label=NodeLabel.FUNCTION,
                path=file_uri,
                name=f_name,
                start_line=f_start_line,
                end_line=f_end_line,
            ))

        return nodes, internal_edges
