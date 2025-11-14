"""
    This script is a single clear entry point.

    1. Creates the FastAPI app object
    2. Includes the routers from /api

    Command to run Backend for Production:
        uvicorn app.main:app --host 0.0.0.0 --port 8000

"""

from fastapi import FastAPI

# import the routers
from api.routes_chat


