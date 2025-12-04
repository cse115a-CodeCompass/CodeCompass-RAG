# CodeCompass

CodeCompass is a GraphRAG-powered tool for generating interactive documentation and enabling intelligent code-aware chat for your codebase.

## Features

- **Knowledge Graph Indexing** - Extracts code elements (classes, functions, methods) and relationships (CONTAINS, CALLS, IMPORTS)
- **Vector Database** - Semantic search over code using embeddings
- **GraphRAG Retrieval** - Combines vector search with graph traversal for context-aware code understanding
- **AI Documentation** - Automatically generates wiki-style documentation for your codebase
- **Multi-Language Support** - Python, TypeScript/JavaScript, C, and C++

## Prerequisites

- **Python 3.10+**
- **Node.js 18+**
- **Ollama** - For local LLM inference

### LSP Servers (for code analysis)

Install the LSP servers for the languages you want to analyze:

```bash
# Python (Pyright)
npm install -g pyright

# TypeScript/JavaScript
npm install -g typescript-language-server typescript

# C/C++ (clangd) - choose one based on your OS:
# Windows: Install LLVM from https://releases.llvm.org/
# macOS: brew install llvm
# Ubuntu/Debian: sudo apt install clangd
# Fedora: sudo dnf install clang-tools-extra
```

## Installation

### 1. Clone the repository

```bash
git clone -b release/FALL-2025-DEMO git@github.com:cse115a-CodeCompass/CodeCompass-RAG.git
cd CodeCompass-RAG
```

### 2. Backend Setup

```bash
cd RAG-Backend

# Create and activate virtual environment
python -m venv venv

# Windows
venv\Scripts\activate

# Linux/macOS
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### 3. Backend Configuration

```bash
# Copy the example environment file
cp .env.example .env

# Edit .env with your configuration
# - OLLAMA_AGENT_MODEL: The Ollama model to use (default: qwen2.5:3b)
```

### 4. Frontend Setup

```bash
cd ../frontend

# Install dependencies
npm install
```

## Running the Application

### Start the Backend

```bash
cd RAG-Backend

# Development
python main.py

# Production
uvicorn main:app --host 0.0.0.0 --port 8000
```

The backend runs on `http://localhost:8000`.

On first startup, the backend will:
1. Check if Ollama is installed
2. Verify required LLM models are available
3. Initialize the ChromaDB vector stores

### Start the Frontend

```bash
cd frontend

npm run dev
```

The frontend runs on `http://localhost:3000`.

## Project Structure

```
CodeCompass-RAG/
├── RAG-Backend/
│   ├── api/                    # FastAPI route handlers
│   ├── indexing_pipelines/     # Code and documentation indexing
│   │   └── code_pipeline/
│   │       ├── core/           # Graph model and indexing logic
│   │       ├── languages/      # Language-specific handlers
│   │       ├── lsp/            # Language Server Protocol integration
│   │       └── vectorization/  # Embedding and vector DB logic
│   ├── retreival_pipeline/     # RAG retrieval logic
│   ├── startup/                # Startup checks
│   ├── main.py                 # FastAPI entry point
│   ├── config.py               # Path configuration
│   └── requirements.txt
│
└── frontend/                   # Next.js frontend
    ├── src/
    │   ├── app/                # Next.js app router pages
    │   ├── components/         # React components
    │   ├── hooks/              # Custom React hooks
    │   └── utils/              # Utility functions
    └── package.json
```

## Usage

1. Start both the backend and frontend servers
2. Open `http://localhost:3000` in your browser
3. Connect your GitHub repository or upload a local codebase
4. Wait for indexing to complete
5. Use the chat interface to ask questions about your code

## Architecture

### Graph Structure

**Nodes:**
- `FOLDER` - Directory nodes
- `FILE` - Source file nodes
- `CLASS` - Class definitions
- `FUNCTION` - Top-level functions
- `METHOD` - Class methods

**Edges:**
- `CONTAINS` - Hierarchical relationships (folder → file → class → method)
- `CALLS` - Function/method call relationships (via LSP)
- `IMPORTS` - File import dependencies (via AST)

### GraphRAG Retrieval Flow

1. Vector search finds semantically relevant seed nodes
2. k-hop graph expansion retrieves structurally related code
3. Combined context is sent to LLM for answering questions

## Supported Languages

| Language | Extensions | LSP Server | Install |
|----------|------------|------------|---------|
| Python | `.py`, `.pyi` | Pyright | `npm install -g pyright` |
| TypeScript | `.ts`, `.tsx` | typescript-language-server | `npm install -g typescript-language-server typescript` |
| JavaScript | `.js`, `.jsx` | typescript-language-server | (same as TypeScript) |
| C | `.c` | clangd | Install LLVM |
| C++ | `.cpp`, `.hpp`, `.cc`, `.cxx`, `.h`, `.hh`, `.hxx` | clangd | Install LLVM |

## License

MIT
