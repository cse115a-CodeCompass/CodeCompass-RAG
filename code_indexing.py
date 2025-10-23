import os
from pathlib import Path
from typing import List, Dict, Tuple, Optional
import ast
import json
import fnmatch
from langchain_text_splitters import Language, RecursiveCharacterTextSplitter
from code_chunking import CodeChunker
from langchain_chroma import Chroma
from langchain_openai import OpenAIEmbeddings
from langchain_core.documents import Document


class CodeIndexer:
    """Index code files from a directory"""
    
    SUPPORTED_EXTENSIONS = {
        '.py': 'python',
        '.js': 'javascript',
        '.ts': 'typescript',
        '.java': 'java',
        '.cpp': 'cpp',
        '.c': 'c',
        '.go': 'go',
        '.rs': 'rust',
    }
    
    def __init__(self, base_dir: str):
        self.base_dir = Path(base_dir)
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
        self.embedder = OpenAIEmbeddings()
        self.chunks = []
        
    def should_process_dir(self, dirpath: Path, base_path: Optional[Path] = None) -> bool:
        """
        Return False if:
        - dirpath is outside the base; or
        - any component of dirpath (relative to base) is in self.excluded_dirs.
        The base directory itself is always allowed so we can descend.
        """
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
        """Return True iff this is a supported source file and not an excluded runtime file."""
        if filepath.suffix.lower() not in self.SUPPORTED_EXTENSIONS:
            return False

        filename = filepath.name

        if any(fnmatch.fnmatch(filename, pattern) for pattern in self.excluded_files):
            return False

        return True
    
    def index_directory(self) -> List[Document]:
        """
        Indexes directory
        """
        base = self.base_dir.resolve()

        for dirpath, dirnames, filenames in os.walk(base, topdown=True):
            current_dir = Path(dirpath)

            dirnames[:] = [
                d for d in dirnames
                if self.should_process_dir(current_dir / d, base)
            ]

            for filename in filenames:
                filepath = current_dir / filename
                if not self.should_process_file(filepath):
                    continue

                self.index_file(filepath)

        return self.chunks

    def index_file(self, filepath: Path):
        """Index a single code file"""
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            file_chunks = self.chunker.chunk(content, str(filepath))
            for chunk in file_chunks:
                self.chunks.append(chunk)
                
        except Exception as e:
            print(f"Error indexing {filepath}: {e}")
    
    def save_to_db(self, output_path: str = './chroma_db'):
        """Save indexed chunks to vector detabase"""
        vector_store = Chroma(
            collection_name="codecompass_collection",
            embedding_function=self.embedder,
            persist_directory=output_path,
        )
        vector_store.add_documents(self.chunks)

