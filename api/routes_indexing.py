""" """

import os
import shutil

from fastapi import APIRouter, HTTPException
from git import GitCommandError, Repo
from pydantic import BaseModel

from services.github_app import github_app

router = APIRouter()


class IndexRequest(BaseModel):
    repo_url: str
    installation_id: str
    branch: str


@router.post("/repos/index")
async def index_repo(body: IndexRequest):
    """
    Index a repository - clone and process it for RAG

    Receives pre-validated repo info from Next.js API routes with GitHub App auth
    """
    try:
        url = body.repo_url
        installation_id = body.installation_id
        branch = body.branch

        # TODO: Implement actual indexing logic
        # This would typically:
        # 1. Clone the repository using installation_id for auth
        # 2. Parse code files
        # 3. Generate embeddings
        # 4. Store in vector/graph databases

        # Parse owner and repo from url:
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

        try:
            # Clone the repository using installation_id for auth (shallow clone with depth=1)
            auth_url = f"https://x-access-token:{token}@github.com/{owner}/{repo}.git"

            Repo.clone_from(auth_url, temp_dir, branch=branch, depth=1)

            # Parse code files
            # Generate embeddings
            # Store in vector/graph databases

            return {
                "status": "success",
                "message": f"Repository cloned to {temp_dir}",
                "repo_url": url,
                "branch": branch,
                "temp_dir": temp_dir,
            }
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
        except Exception as clone_error:
            # Clean up temp directory on failure
            if os.path.exists(temp_dir):
                shutil.rmtree(temp_dir)
            raise HTTPException(
                status_code=500, detail=f"Indexing failed: {str(clone_error)}"
            )

    except HTTPException:
        # Re-raise HTTP exceptions as-is
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Indexing failed: {str(e)}")
