
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

import ollama



class RAG_Agent:
    """
        An orchestrator agent for selecting the appropriate retrieval tool
        based on the user's query. The agent decides between:

        1. Codebase Documentation RAG Pipeline
        2. Code RAG Pipeline
        3. Keyword Search
        4. No retreival necessary

        The agent:
        - Receives a natural language query
        - Uses an LLM classifier(lightweight LLM)
        - Executes the chosen retrieval pipeline
        - Prompts the selected LLM with the assembled response context & query
        - Streams the final LLM response back to the user
    """
    def __init__(self):

        self.agent_llm = "qwen2.5:3b"
        


        pass

    def select_tool(self, query: str):
        """
            LLM Decides which Knowledge Source to retrieve from, for given user query.

            Args:
                query (str): Entered User Query

            Returns one of:
                - "docs_rag"
                - "code_rag"
                - "keyword_search"
                - "conversation_history"
        """

        


        return

    def dispatch_to_tool(self, tool_name, query, chat_history):
        """
            Executes the selected tool & returns the retreived context.

            Args:
                tool_name (str):
                query (str): Entered User Query

            Returns:
                Retrieved context (str)
        """

        return


    def query_llm():
        """
        """
        return

    def run(self):
        """
        """

        return




# This main() is only for testing purposes
def main():
    return

if __name__ == "__main__":
    main()

