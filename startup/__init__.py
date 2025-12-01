"""
    This function
"""

import os
from .ollama_checks import Ollama_Manager
from .chroma_checks import Chroma_Manager

from config import KG_GRAPH_STORE_PATH

async def run_startup_checks():

    Ollama = Ollama_Manager()

    # Check if Ollama is installed
    if not Ollama.is_ollama_installed():
        print("ERROR: OLLAMA IS NOT INSTALLED")
        return

    # Start Ollama if it's not already running
    if not Ollama.is_ollama_running():
        try:
            subprocess.Popen(
                ["ollama", "serve"]
            )  # starts the Ollama server using subprocess
            time.sleep(2)  # waits 2 seconds to allow the server to start
        except FileNotFoundError:
            raise RuntimeError(
                "Ollama not found. Make sure it's installed and in PATH."
            )

    # Check if Certain Ollama LLMs are installed
    # TODO
    
    Chroma = Chroma_Manager()

    # Check if ChromaDB for Documentation exists, if not create it
    Chroma.is_docu_chormadb_created()

    # Check if a Directory to store Knowledge Graphs is created, if not create it
    os.makedirs(KG_GRAPH_STORE_PATH, exist_ok=True)
