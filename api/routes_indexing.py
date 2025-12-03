
from fastapi import APIRouter, HTTPException, Request
from pydantic import BaseModel

import os
import shutil

from dotenv import load_dotenv
from git import GitCommandError, Repo
import json

from services.github_app import github_app


router = APIRouter()

@router.post("/repos/index")
async def index_repo(request: Request):
    #clone
    try:
        body = await request.json()

        url = body.get("repo_url")
        user_id = body.get("user_id")
        repo_id = body.get("repo_id")
        installation_id = body.get("installation_id")
        latest_version = body.get("version")
        branch = body.get("branch")
        provider = body.get("provider")
        token = body.get("token")

        if not url or not user_id or not installation_id or not branch:
            raise HTTPException(status_code=400, detail="Missing required fields")

        # Parse owner and repo from url
        owner, repo = url.split("/")[-2:]

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
            if provider == "github":
                token = github_app.get_installation_token(installation_id=int(installation_id))
                
                # Clone the repository using installation_id for auth (shallow clone with depth=1)
                auth_url = f"https://x-access-token:{token}@github.com/{owner}/{repo}.git"
                
            elif provider == "gitlab":
                url = url.replace("https://","")
                auth_url = f"https://gitlab-ci-token:{token}@{url}"
                
            elif provider == "bitbucket":
                url = url[url.find("bitbucket.org"):]
                auth_url =  f"https://x-token-auth:{token}@{url}"
            print(auth_url)
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
    #index
    