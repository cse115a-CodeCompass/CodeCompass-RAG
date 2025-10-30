from pathlib import Path
# from typing import List, Dict, Tuple, Optional
import ast
import json
import fnmatch
from langchain_text_splitters import Language, RecursiveCharacterTextSplitter
from code_chunking import CodeChunker, EXT_TO_LANG
from langchain_chroma import Chroma
from langchain_openai import OpenAIEmbeddings
from langchain_core.documents import Document
import fnmatch, os
from pathlib import Path
from typing import List, Optional

from graph_model import Graph, Node, NodeLabel
from code_chunking import CodeChunker

class CodeIndexer:
    """Builds the hierarchy graph: folders → files → (classes/functions/methods)."""

    def __init__(self, base_dir: str):
        self.base_dir = Path(base_dir).resolve()
        self.excluded_dirs = [
            '__pycache__', '.git', 'node_modules', '.pytest_cache',
            'venv', '.venv', 'env', '.env', 'dist', 'build',
            '.next', '.nuxt', 'coverage', '.idea', '.vscode'
        ]
        self.excluded_files = [
            '*.pyc', '*.pyo', '*.pyd', '*.so', '*.dll', '*.dylib',
            '.DS_Store', '*.log', '*.sqlite', '*.db', 'package-lock.json',
            'yarn.lock', '.gitignore', '*.min.js', '*.min.css'
        ]
        self.chunker = CodeChunker()
        self.graph = Graph()  

    def should_process_dir(self, dirpath: Path, base_path: Optional[Path] = None) -> bool:
        base = (base_path or self.base_dir).resolve()
        try:
            rel = dirpath.resolve().relative_to(base)
        except Exception:
            return False
        parts = [p for p in rel.parts if p not in ('', '.')]
        if not parts:
            return True
        return not any(part in self.excluded_dirs for part in parts)

    def should_process_file(self, filepath: Path) -> bool:
        if filepath.suffix.lower() not in (".py",):  # Step 1: start with Python
            return False
        filename = filepath.name
        if any(fnmatch.fnmatch(filename, pattern) for pattern in self.excluded_files):
            return False
        return True

    def _folder_id(self, path: Path) -> str:
        return f"folder:{path.resolve().as_uri()}"

    def _file_id(self, path: Path) -> str:
        return f"file:{path.resolve().as_uri()}"

    def _ensure_folder_nodes(self, folder: Path) -> str:
        """Ensure nodes for each ancestor from base_dir → folder, wire CONTAINS edges."""
        base = self.base_dir
        cur_parent_id: Optional[str] = self._folder_id(base)
        self.graph.add_node(Node(
            id=cur_parent_id, label=NodeLabel.FOLDER, path=str(base), name=base.name
        ))

        rel_parts = folder.resolve().relative_to(base).parts
        cur_path = base
        for part in rel_parts:
            cur_path = cur_path / part
            nid = self._folder_id(cur_path)
            self.graph.add_node(Node(id=nid, label=NodeLabel.FOLDER, path=str(cur_path), name=cur_path.name))
            self.graph.add_contains(cur_parent_id, nid)
            cur_parent_id = nid
        return cur_parent_id  # id of the requested folder

    def index_directory(self) -> Graph:
        base = self.base_dir
        # ensure root folder node
        self._ensure_folder_nodes(base)

        for dirpath, dirnames, filenames in os.walk(base, topdown=True):
            current_dir = Path(dirpath)

            dirnames[:] = [d for d in dirnames if self.should_process_dir(current_dir / d, base)]

            # create/ensure this folder node (and its ancestors)
            folder_node_id = self._ensure_folder_nodes(current_dir)

            for filename in filenames:
                filepath = current_dir / filename
                if not self.should_process_file(filepath):
                    continue
                self.index_file(filepath, parent_folder_id=folder_node_id)

        return self.graph

    def index_file(self, filepath: Path, parent_folder_id: str):
        """file → definitions (CONTAINS)."""
        try:
            code = filepath.read_text(encoding='utf-8')
        except Exception as e:
            print(f"Error reading {filepath}: {e}")
            return

        file_id = self._file_id(filepath)
        file_node = Node(
            id=file_id, label=NodeLabel.FILE, path=str(filepath.resolve()), name=filepath.name
        )
        self.graph.add_node(file_node)
        self.graph.add_contains(parent_folder_id, file_id)

        # extract class/function/method definitions inside the file
        def_nodes, internal_edges = self.chunker.extract_hierarchy(code, str(filepath))

        # add defs, and file→def edges
        for n in def_nodes:
            self.graph.add_node(n)
            self.graph.add_contains(file_id, n.id)

        # add class→method edges (already CONTAINS relationships at definition level)
        for parent_id, child_id in internal_edges:
            self.graph.add_contains(parent_id, child_id)

