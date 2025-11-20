
"""
    - The RAG agent acts as the brain of the pipeline.
        It Orchestrates:
        - Retreival from all the Data Sources:
            1. Vector DB
            2. Graph DB
            3. Keyword Search
        - Prompting the LLM
        - Response Post Processing
            
    - It receives `query`, `chat_history` & ``
    
    - An “orchestrator agent” in a RAG system is usually just a normal LLM that has tool-calling abilities.



    


"""

class Agent:
    def __init__(self):
        pass

    
