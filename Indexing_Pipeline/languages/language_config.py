"""
Language Configuration for CodeCompass

Defines which language handlers are enabled for the system.
To add support for a new language:
1. Implement a LanguageHandler subclass in languages/
2. Add an instance to the ENABLED_LANGUAGES list below
"""

from Indexing_Pipeline.languages.python_handler import PythonHandler
from Indexing_Pipeline.languages.typescript_handler import TypeScriptHandler

# List of enabled language handlers
# Each handler instance provides language-specific parsing and LSP configuration
ENABLED_LANGUAGES = [
    PythonHandler(),
    TypeScriptHandler(),  # Handles .ts, .tsx, .js, .jsx
    # GoHandler(),          # Uncomment when Go support is ready
    # RustHandler(),        # Uncomment when Rust support is ready
]
