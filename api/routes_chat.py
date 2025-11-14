"""


"""

from fastapi import APIRouter


from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import StreamingResponse
import json
from pydantic import BaseModel
import time

import os

import ollama

from fastapi.responses import RedirectResponse, JSONResponse
from fastapi.staticfiles import StaticFiles

from pathlib import Path
import html



from Retreival_Pipeline.RAG_Agent import _



app = FastAPI()

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
    

# Define the expected request model
class RagRequest(BaseModel):
    userQuery: str
    conversationHistory: list
    selectedModel: str



# !!! DUMMY ENDPOINT !!!
######################################################################
@app.post("/chat_toy")
async def handle_rag_request_toy(request: Request):
    """



    """


    try:
        body = await request.json()
        print("Received body:", body)

        rag_request = RagRequest(**body)
        user_query = rag_request.userQuery
        selected_model = "phi3:latest"
        chat_history = rag_request.conversationHistory

        chat_history.append({
            'role': 'user',
            'content': f'USER QUESTION: {user_query}'
        })

        response = ollama.chat(
            model=selected_model,
            messages=chat_history,
            stream=False
        )

        result = response['message']['content']
        return JSONResponse({"response": result})

    except json.JSONDecodeError:
        raise HTTPException(status_code=400, detail="Invalid JSON")
    except Exception as e:
        print(f"Error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/chat_toy/stream")
async def handle_rag_request_toy_stream(request: Request):
    """
    
    """

    body = await request.json()
    rag_request = RagRequest(**body)
    chat_history = rag_request.conversationHistory
    user_query = rag_request.userQuery

    chat_history.append({'role': 'user', 'content': user_query})

    def generate():
        for chunk in ollama.chat(model="phi3:latest", messages=chat_history, stream=True):
            yield chunk['message']['content']

    return StreamingResponse(generate(), media_type="text/plain")

######################################################################

@app.post("/chat")
async def handle_rag_request(request: Request):
    """ 
        
    
        Args:

        Retruns:

        Raises:
        
    """

    try:
        body = await request.json()
        print("Received body:", body)

        rag_request = RagRequest(**body)

        # Pass to the Orchestrator Agent



        user_query = rag_request.userQuery
        selected_model = "phi3:latest"
        chat_history = rag_request.conversationHistory

        chat_history.append({
            'role': 'user',
            'content': f'USER QUESTION: {user_query}'
        })

        response = ollama.chat(
            model=selected_model,
            messages=chat_history,
            stream=False
        )

        result = response['message']['content']
        return JSONResponse({"response": result})

    except json.JSONDecodeError:
        raise HTTPException(status_code=400, detail="Invalid JSON")
    except Exception as e:
        print(f"Error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))





if __name__ == "__main__":
    import uvicorn

    # Start Ollama if it's not already running
    if not is_ollama_running():
        try:
            subprocess.Popen(["ollama", "serve"])   # starts the Ollama server using subprocess
            time.sleep(2)   # waits 2 seconds to allow the server to start
        except FileNotFoundError:
            raise RuntimeError("Ollama not found. Make sure it's installed and in PATH.")

    uvicorn.run(app, host="0.0.0.0", port=8000)

