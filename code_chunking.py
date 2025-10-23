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

class CodeChunker:
    """Split code files into LangChain Documents"""
    def __init__(self, chunk_size: int = 800, overlap: int = 100):
        self.chunk_size = int(chunk_size)
        self.overlap = int(overlap)

    def chunk(self, code: str, filepath: Optional[str] = None) -> List[Document]:
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
