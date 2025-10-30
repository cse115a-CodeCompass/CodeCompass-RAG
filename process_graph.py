
from urllib.parse import urlparse, unquote
import os, re
from pathlib import Path
from typing import Iterable, List, Dict, Any
from langchain_core.documents import Document
from langchain_chroma import Chroma
from langchain_openai import OpenAIEmbeddings  

def _to_fs_path(p: str) -> str:
    """Accept absolute path or any 'file:' URI (even with backslashes) and return a filesystem path."""
    if not p.startswith("file:"):
        return p
    # Normalize slashes and parse as a URL
    p_norm = p.replace("\\", "/")
    parsed = urlparse(p_norm)
    fs = unquote(parsed.path)  # '/C:/Users/...' on Windows, '/home/... ' on *nix
    # Windows drive-letter fix: strip leading slash if present (e.g. '/C:/...')
    if re.match(r"^/[A-Za-z]:", fs):
        fs = fs[1:]
    # Convert to OS separators
    return fs

def node_text(n) -> str:
    fs_path = _to_fs_path(n.path)
    text = Path(fs_path).read_text(encoding="utf-8")
    lines = text.splitlines(keepends=True)
    s = int(n.start_line or 0)
    e = int(n.end_line or s)
    return "".join(lines[s:e+1])

def nodes_to_documents(nodes: Iterable) -> List[Document]:
    docs: List[Document] = []
    for n in nodes:
        label_str = getattr(n.label, "value", str(n.label))
        if label_str not in {"class", "function", "method"}:
            continue
        content = node_text(n)
        fs_path = _to_fs_path(n.path)
        meta: Dict[str, Any] = {
            "node_id": n.id,
            "label": label_str,
            "name": n.name,
            "path": fs_path,                         # store filesystem path for readability
            "start_line": int(n.start_line or 0),
            "end_line": int(n.end_line or 0),
        }
        docs.append(Document(page_content=content, metadata=meta))
    return docs

def index_graph_into_vectors(G, persist_dir="./chroma_db"):
    embedder = OpenAIEmbeddings()
    vs = Chroma(
        collection_name="code_graph_chunks",
        embedding_function=embedder,
        persist_directory=persist_dir,
    )
    defs = [n for n in G.nodes.values() if n.label in ("class","function","method")]
    docs = nodes_to_documents(defs)
    ids  = [d.metadata["node_id"] for d in docs]
    vs.add_documents(docs, ids=ids)
    return vs
