"""
API routes for repository indexing and documentation generation.

Integrates the complete 4-phase CodeCompass pipeline:
1. Code Indexing - Build knowledge graph
2. Summarization - Generate AI summaries
3. IA Generation - Generate wiki information architecture
4. Content Generation - Generate markdown wiki pages
"""

import os
import shutil
from pathlib import Path

from dotenv import load_dotenv
from fastapi import APIRouter, HTTPException, Request
from git import GitCommandError, Repo
from pydantic import BaseModel

from Indexing_Pipeline.docs.llm.ollama_provider import OllamaProvider

# Import LLM providers
from Indexing_Pipeline.docs.llm.openai_provider import OpenAIProvider

# Import documentation pipeline functions from documentation.py
from Indexing_Pipeline.documentation import (
    build_knowledge_graph,
    generate_summaries,
    generate_wiki_content,
    generate_wiki_ia,
)
from services.github_app import github_app

# Load environment variables
load_dotenv()

router = APIRouter()

# ============================================================================
# PIPELINE CONFIGURATION
# ============================================================================

# LLM Provider configuration
DEFAULT_PROVIDER = "openai"  # Options: "openai", "ollama"
DEFAULT_MODEL = "gpt-4o-mini"  # For OpenAI
DEFAULT_OLLAMA_MODEL = "deepseek-r1"  # For Ollama
MAX_CONCURRENT = 10  # For OpenAI (lower due to rate limits)
OLLAMA_CONCURRENT = 50  # For Ollama (higher, no rate limits)

# Pipeline options
FAST_MODE = False  # Skip detailed summaries (30-50% faster)
NO_SUBPAGES = False  # Skip generating detailed subpages in IA
VERBOSE = True  # Print detailed progress


class IndexRequest(BaseModel):
    repo_url: str
    installation_id: str
    branch: str


@router.post("/repos/index")
async def index_repo(request: Request):
    """
    Index a repository - clone and process it with the full documentation pipeline.

    Receives pre-validated repo info from Next.js API routes with GitHub App auth.

    Runs the complete 4-phase CodeCompass pipeline:
    1. Clone repository
    2. Build knowledge graph (code indexing)
    3. Generate AI summaries (definitions -> classes -> files -> modules)
    4. Generate wiki information architecture
    5. Generate markdown wiki pages
    """
    provider = None

    try:
        body = await request.json()

        url = body.get("repo_url")
        installation_id = body.get("installation_id")
        branch = body.get("branch")

        # Parse owner and repo from url
        owner, repo = url.split("/")[-2:]

        # Obtain installation token from github app
        token = github_app.get_installation_token(installation_id=int(installation_id))

        # Create a directory for cloning within the project
        clone_base_dir = os.path.join(
            os.path.dirname(os.path.dirname(__file__)), "cloned_repos"
        )
        os.makedirs(clone_base_dir, exist_ok=True)

        # Create a unique directory for this repo
        temp_dir = os.path.join(clone_base_dir, f"{owner}_{repo}_{branch}")

        # ====================================================================
        # STEP 1: Clone Repository
        # ====================================================================

        try:
            # Clone the repository using installation_id for auth (shallow clone with depth=1)
            auth_url = f"https://x-access-token:{token}@github.com/{owner}/{repo}.git"
            Repo.clone_from(auth_url, temp_dir, branch=branch, depth=1)

        except GitCommandError as git_error:
            # Clean up temp directory on failure
            if os.path.exists(temp_dir):
                shutil.rmtree(temp_dir)

            # Check for specific git errors
            error_message = (
                str(git_error.stderr) if git_error.stderr else str(git_error)
            )

            if (
                "repository not found" in error_message.lower()
                or "not found" in error_message.lower()
            ):
                raise HTTPException(
                    status_code=404, detail=f"Repository not found: {url}"
                )
            elif (
                "invalid username or password" in error_message.lower()
                or "authentication failed" in error_message.lower()
            ):
                raise HTTPException(
                    status_code=401,
                    detail="Authentication failed. Invalid installation token.",
                )
            elif "not a git repository" in error_message.lower():
                raise HTTPException(
                    status_code=400, detail=f"Invalid repository URL: {url}"
                )
            else:
                raise HTTPException(
                    status_code=500, detail=f"Git clone failed: {error_message}"
                )

        # ====================================================================
        # STEP 2-5: Run Documentation Pipeline
        # ====================================================================

        # Initialize LLM provider
        if not os.getenv("OPENAI_API_KEY") and DEFAULT_PROVIDER == "openai":
            raise HTTPException(
                status_code=500,
                detail="OPENAI_API_KEY environment variable not set. Please configure it in .env file.",
            )

        if DEFAULT_PROVIDER == "openai":
            provider = OpenAIProvider(
                model=DEFAULT_MODEL, max_concurrent=MAX_CONCURRENT
            )
        else:
            provider = OllamaProvider(
                model=DEFAULT_OLLAMA_MODEL, max_concurrent=OLLAMA_CONCURRENT
            )

        # Define paths for outputs within cloned repo
        codecompass_dir = os.path.join(temp_dir, ".codecompass")
        graph_cache_path = os.path.join(codecompass_dir, "graph.json")
        summaries_path = os.path.join(codecompass_dir, "summaries.json")
        module_summaries_path = os.path.join(codecompass_dir, "module_summaries.json")
        ia_path = os.path.join(codecompass_dir, "wiki_ia.json")
        wiki_output_dir = os.path.join(temp_dir, "wiki")

        # Phase 1: Build knowledge graph
        graph = await build_knowledge_graph(
            repo_path=temp_dir,
            graph_cache_path=graph_cache_path,
            rebuild=False,  # Use cache if available
            verbose=VERBOSE,
        )

        # Count nodes for statistics
        from Indexing_Pipeline.core.graph_model import NodeLabel

        graph_stats = {
            "folders": len(
                [n for n in graph.nodes.values() if n.label == NodeLabel.FOLDER]
            ),
            "files": len(
                [n for n in graph.nodes.values() if n.label == NodeLabel.FILE]
            ),
            "classes": len(
                [n for n in graph.nodes.values() if n.label == NodeLabel.CLASS]
            ),
            "methods": len(
                [n for n in graph.nodes.values() if n.label == NodeLabel.METHOD]
            ),
            "functions": len(
                [n for n in graph.nodes.values() if n.label == NodeLabel.FUNCTION]
            ),
            "total_nodes": len(graph.nodes),
            "total_edges": len(graph.edges),
        }

        # Phase 2: Generate AI summaries
        # Note: generate_summaries from documentation.py uses hardcoded paths
        # We need to temporarily change working directory or modify the function
        # For now, we'll call it and let it use default paths within temp_dir
        original_cwd = os.getcwd()
        try:
            os.chdir(temp_dir)  # Change to repo directory so .codecompass/ paths work

            summarization_stats = await generate_summaries(
                graph=graph,
                provider=provider,
                repo_path=temp_dir,
                fast_mode=FAST_MODE,
                verbose=VERBOSE,
            )

            # Phase 3: Generate wiki IA
            ia = await generate_wiki_ia(
                graph=graph,
                provider=provider,
                repo_path=temp_dir,
                no_subpages=NO_SUBPAGES,
                verbose=VERBOSE,
            )

            # Get IA stats
            ia_stats = ia.get_stats()
            coverage = ia.metadata.get("coverage_stats", {}).get(
                "coverage_percentage", 0
            )
            wiki_ia_stats = {
                "total_pages": ia_stats["total_pages"],
                "max_depth": ia_stats["max_depth"],
                "coverage_percentage": coverage,
            }

            # Phase 4: Generate wiki content
            content_stats = await generate_wiki_content(
                graph=graph,
                ia=ia,
                provider=provider,
                repo_path=temp_dir,
                output_dir=wiki_output_dir,
                verbose=VERBOSE,
            )

        finally:
            os.chdir(original_cwd)  # Restore original working directory

        # Return comprehensive results with absolute paths
        return {
            "status": "success",
            "message": f"Repository indexed and documented successfully",
            "repo_url": url,
            "branch": branch,
            "temp_dir": temp_dir,
            "indexing_results": {
                "graph_stats": graph_stats,
                "summarization_stats": summarization_stats,
                "wiki_ia_stats": wiki_ia_stats,
                "content_generation_stats": content_stats,
                "output_paths": {
                    "graph": os.path.join(temp_dir, ".codecompass", "graph.json"),
                    "summaries": os.path.join(
                        temp_dir, ".codecompass", "summaries.json"
                    ),
                    "module_summaries": os.path.join(
                        temp_dir, ".codecompass", "module_summaries.json"
                    ),
                    "wiki_ia": os.path.join(temp_dir, ".codecompass", "wiki_ia.json"),
                    "wiki_content": os.path.join(temp_dir, "wiki/"),
                },
            },
        }

        # TODO: Store generated documentation files in database
        # Currently files are kept in: cloned_repos/{owner}_{repo}_{branch}/
        # Files to store:
        # - .codecompass/graph.json (knowledge graph)
        # - .codecompass/summaries.json (node summaries)
        # - .codecompass/module_summaries.json (module summaries)
        # - .codecompass/wiki_ia.json (wiki information architecture)
        # - wiki/*.md files (generated wiki pages)
        # After database storage is implemented, add cleanup: shutil.rmtree(temp_dir)

    except HTTPException:
        # Re-raise HTTP exceptions as-is
        raise

    except Exception as e:
        # Clean up on failure
        if "temp_dir" in locals() and os.path.exists(temp_dir):
            shutil.rmtree(temp_dir)

        import traceback

        error_detail = f"Indexing pipeline failed: {str(e)}\n{traceback.format_exc()}"
        raise HTTPException(status_code=500, detail=error_detail)

    finally:
        # Always clean up provider
        if provider is not None:
            await provider.close()
