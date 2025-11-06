"""
LSP Manager - Multi-Language LSP Client Management

Manages multiple LSP clients (one per language) and routes files to the appropriate
client based on file extension. This enables cross-language code analysis in polyglot repositories.
"""

from typing import Dict, List, Tuple
from pathlib import Path

from lsp.lsp_client import LSPClient
from language_handler import LanguageHandler


class LSPManager:
    """
    Manages multiple LSP clients for multi-language support.

    Each language has its own LSP server (e.g., Pyright for Python, tsserver for TypeScript).
    The LSPManager creates one client per language and routes file operations to the correct client.
    """

    def __init__(self, handlers: List[LanguageHandler], root_dir: str):
        """
        Initialize LSP clients for all enabled languages.

        Args:
            handlers: List of LanguageHandler instances defining supported languages
            root_dir: Root directory of the project (passed to LSP servers)
        """
        self.clients: Dict[str, Tuple[LSPClient, LanguageHandler]] = {}
        self.ext_to_lang: Dict[str, str] = {}
        self.root_dir = root_dir

        # Create one LSP client per language
        for handler in handlers:
            lang_id = handler.get_lsp_language_id()
            cmd = handler.get_lsp_server_command()

            # Initialize LSP client for this language
            client = LSPClient(cmd, root=root_dir)
            self.clients[lang_id] = (client, handler)

            # Map file extensions to language ID for routing
            for ext in handler.get_file_extensions():
                self.ext_to_lang[ext] = lang_id

    def get_client_for_file(self, file_path: str) -> Tuple[LSPClient, LanguageHandler]:
        """
        Get the LSP client and handler for a specific file.

        Args:
            file_path: Path to the file (can be URI or filesystem path)

        Returns:
            Tuple of (LSPClient, LanguageHandler) for the file's language

        Raises:
            KeyError: If no handler supports the file's extension
        """
        ext = Path(file_path).suffix.lower()
        lang_id = self.ext_to_lang.get(ext)

        if lang_id is None:
            # Fallback: try extracting extension from URI
            if file_path.startswith("file://"):
                # Extract extension from URI
                path_part = file_path.split("file://")[-1]
                ext = Path(path_part).suffix.lower()
                lang_id = self.ext_to_lang.get(ext)

        if lang_id is None:
            raise KeyError(f"No language handler for extension: {ext}")

        return self.clients[lang_id]

    def initialize_all(self, root_uri: str):
        """
        Initialize all LSP servers.

        Must be called before using any LSP functionality.

        Args:
            root_uri: Root URI of the project (file:// URI)
        """
        for lang_id, (client, handler) in self.clients.items():
            print(f"Initializing {lang_id} LSP server...")
            client._initialize()

    def shutdown_all(self):
        """
        Shutdown all LSP servers gracefully.

        Should be called when done with LSP operations to clean up resources.
        """
        for lang_id, (client, handler) in self.clients.items():
            try:
                print(f"Shutting down {lang_id} LSP server...")
                client.shutdown()
            except Exception as e:
                print(f"Error shutting down {lang_id} LSP: {e}")
