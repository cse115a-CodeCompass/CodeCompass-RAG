
"""
    - The RAG agent acts as the brain of the pipeline.
        It Orchestrates:
        - Retreival from all the Data Sources:
            1. Vector DB
            2. Graph DB
            3. Keyword Search
        - Prompting the LLM
        - Response Post Processing
            
    - It receives `query` & `chat_history`
    - It retreives relevant context from the Knowledge Base
    - It Prompts the LLM with retreived context
    - It Streams back LLM response

    - An “orchestrator agent” in a RAG system is usually just a normal LLM that has tool-calling abilities.
"""

import ollama

from dotenv import load_dotenv
import os

import System_Prompts


# Load the .env file
load_dotenv()

# Access values
OLLAMA_AGENT_LLM = os.getenv("OLLAMA_AGENT_MODEL")


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
        self.agent_llm = OLLAMA_AGENT_LLM

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

        agent_response = ollama.chat(
            model=OLLAMA_AGENT_LLM,
            messages=[
                {"role":"system", "content": System_Prompts.AGENT_SYS_PROMPT},
                {"role":"user", "content": query}
            ],
        )

        #print(agent_response["message"]["content"])

        return agent_response["message"]["content"]

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


    def query_llm(self, query: str, chat_history: str, context: str):
        """
        """

        return

    def run(self, query: str, chat_history: str):
        """
            This function is called when the route handler (handle_rag_request) executes after the /chat endpoint is hit
            
            Args:
                query (str): Entered User Query
                chat_history (list): Entire Conversation History

            Returns:
                The Ollama Generator Object (which is used for streaming the LLM response)
        """

        # Ask Agent which Knowledge Source to retreive Context from
        selected_tool = self.select_tool(query)

        # Retreive Context from Selected Knowledge Source
        context = self.dispatch_to_tool(select_tool, query, chat_history)

        # Query the LLM through Ollama with provided context
        query_llm(query, chat_history, context)

        return


# This main() is only for testing purposes
def main():
    print(OLLAMA_AGENT_LLM)
    print(System_Prompts.AGENT_SYS_PROMPT)

    obj = RAG_Agent()

    obj.select_tool("what is RAG_AGENT(self)?")

    return

if __name__ == "__main__":
    main()

