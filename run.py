"""
    - Simple script to run uvicorn for Development.

"""

"""
    This script is a single clear entry point.

    1. Creates the FastAPI app object
    2. Includes the routers from /api

    Command to run Backend for Production:
        uvicorn app.main:app --host 0.0.0.0 --port 8000


import uvicorn
from fastapi import FastAPI

# import the routers
from .api import routes_chat
from .api import routes_documentation
from .api import routes_indexing



app = FastAPI()

app.include_router(routes_chat.router)
app.include_router(routes_indexing.router)
app.include_router(routes_documentation.router)

# === Setting Up the Ollama Server ====
import subprocess   # allows running system commands(like starting the Ollama Server)
import time     # provides time related funcs like sleep()
import socket   # used for network communication, in our case to ches if Ollama server is running

def is_ollama_running(host="127.0.0.1", port=11434):
    try:
        with socket.create_connection((host, port), timeout=1):
            return True
    except OSError:
        return False


if __name__ == "__main__":

    # Start Ollama if it's not already running
    if not is_ollama_running():
        try:
            subprocess.Popen(["ollama", "serve"])   # starts the Ollama server using subprocess
            time.sleep(2)   # waits 2 seconds to allow the server to start
        except FileNotFoundError:
            raise RuntimeError("Ollama not found. Make sure it's installed and in PATH.")

    uvicorn.run(app, host="0.0.0.0", port=8000)

"""
