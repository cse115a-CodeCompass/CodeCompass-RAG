
"""
    What is Indexing?
        Indexing is the process by which we store a Codebase(in the form of Vectorized chunks) in a Vector DB using Embedding Models.
        We shall retreive relevant code chunks to the user query from the this Vector DB
"""


#from github import Github, Repository
#from git import Repo

import os


"""
    Args: 
        repo_url: the URL of the GitHub repository
    
    Returns:
        The path to the cloned repository

    Clones given GitHub repo to a temporary directory from where it will be indexed

    Questions:
        - Do we need to clone the repo onto the machine that will perform the Indexing? 
            or can we Index the repo by 
"""
def clone_repository(repo_url):
    return




