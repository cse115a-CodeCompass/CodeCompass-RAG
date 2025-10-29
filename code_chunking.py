from pathlib import Path
from typing import List, Optional
from bisect import bisect_right
from langchain_text_splitters import Language, RecursiveCharacterTextSplitter
from langchain_core.documents import Document


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

from tree_sitter import Language, Parser, Query, QueryCursor
import tree_sitter_python

EXT_TO_LANG_TS = {
    ".py": Language(tree_sitter_python.language()),

}

class CodeChunker:
    """Split code files into LangChain Documents"""
    def __init__(self, chunk_size: int = 800, overlap: int = 100):
        self.chunk_size = int(chunk_size)
        self.overlap = int(overlap)
    
    def chunk(self, code: str, filepath: Optional[str] = None) -> List[Document]:
        ext = Path(filepath).suffix.lower() if filepath else ""
        if ext not in EXT_TO_LANG_TS:
            return self.chunk_fallback(code, filepath)

        ts_lang = EXT_TO_LANG_TS[ext]
        parser = Parser(ts_lang)
        tree = parser.parse(code.encode("utf8"))
        root = tree.root_node

        code_bytes = code.encode("utf8")

        def text(node):
            return code_bytes[node.start_byte:node.end_byte].decode("utf8")

        def first(x):
            return x[0] if isinstance(x, list) else x

        def char_index(byte_idx: int) -> int:
            return len(code_bytes[:byte_idx].decode("utf8"))

        line_starts = [0]
        for i, ch in enumerate(code):
            if ch == "\n":
                line_starts.append(i + 1)

        lang = EXT_TO_LANG.get(ext)
        base_meta = {
            "path": filepath or "",
            "language": (lang.value if lang else "plain"),
        }

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
            ]))
        """)

        q_functions = Query(ts_lang, r"""
        [
        (module
            (function_definition
            name: (identifier) @func.name) @func.def)
        (module
            (decorated_definition
            (function_definition
                name: (identifier) @func.name)) @func.def)
        ]
        """)

        def iter_caps(cursor, node):
            for m in cursor.matches(node):
                if isinstance(m, tuple) and len(m) == 2 and isinstance(m[1], dict):
                    yield m[1]
                elif isinstance(m, dict):
                    yield m
                else:
                    caps = getattr(m, "captures", None)
                    if isinstance(caps, dict):
                        yield caps

        units = []

        cur = QueryCursor(q_methods)
        for caps in iter_caps(cur, root):
            cls_node = first(caps["class.name"])
            meth_name_node = first(caps["method.name"])
            def_node = first(caps["method.def"])

            cls_name = text(cls_node)
            meth_name = text(meth_name_node)

            start_b, end_b = def_node.start_byte, def_node.end_byte
            start_c, end_c = char_index(start_b), char_index(end_b)

            units.append({
                "unit": "method",
                "class": cls_name,
                "symbol": f"{cls_name}.{meth_name}",
                "name": meth_name,
                "start_char": start_c,
                "end_char": end_c,
            })

        cur = QueryCursor(q_functions)
        for caps in iter_caps(cur, root):
            func_name_node = first(caps["func.name"])
            def_node = first(caps["func.def"])

            func_name = text(func_name_node)

            start_b, end_b = def_node.start_byte, def_node.end_byte
            start_c, end_c = char_index(start_b), char_index(end_b)

            units.append({
                "unit": "function",
                "class": None,
                "symbol": func_name,
                "name": func_name,
                "start_char": start_c,
                "end_char": end_c,
            })

        if not units:
            return self.chunk_fallback(code, filepath)

        units.sort(key=lambda u: (u["start_char"], u["end_char"]))

        docs: List[Document] = []
        for u in units:
            unit_text = code[u["start_char"]:u["end_char"]]
            meta = base_meta | {
                "unit": u["unit"],
                "symbol": u["symbol"],
                "name": u["name"],
                "class": u["class"],
                "start_char": u["start_char"],
                "end_char": u["end_char"],
                "start_line": bisect_right(line_starts, u["start_char"]),
                "end_line": bisect_right(line_starts, u["end_char"] - 1),
                "chunk_index": 0, "total_chunks": 1,
            }
            docs.append(Document(page_content=unit_text, metadata=meta))
        return docs


    def chunk_fallback(self, code: str, filepath: Optional[str] = None) -> List[Document]:
        ext = Path(filepath).suffix.lower() if filepath else ""
        lang = EXT_TO_LANG.get(ext)

        splitter_kwargs = dict(
            chunk_size=self.chunk_size,
            chunk_overlap=self.overlap,
            add_start_index=True,
        )
        splitter = (
            RecursiveCharacterTextSplitter.from_language(language=lang, **splitter_kwargs)
            if lang
            else RecursiveCharacterTextSplitter(**splitter_kwargs)
        )

        base_meta = {
            "path": filepath or "",
            "language": (lang.value if lang else "plain"),
        }

        docs = splitter.create_documents(texts=[code], metadatas=[base_meta])

        line_starts = [0]
        for i, ch in enumerate(code):
            if ch == "\n":
                line_starts.append(i + 1)

        total = len(docs)
        for i, d in enumerate(docs):
            start_char = d.metadata.get("start_index")
            if start_char is not None:
                end_char = start_char + len(d.page_content)
                end_char_incl = max(0, end_char - 1)
                start_line = bisect_right(line_starts, start_char)
                end_line = bisect_right(line_starts, end_char_incl)
                d.metadata.update({
                    "start_char": start_char,
                    "end_char": end_char,
                    "start_line": start_line,
                    "end_line": end_line,
                })

            d.metadata.update({"chunk_index": i, "total_chunks": total})

        return docs