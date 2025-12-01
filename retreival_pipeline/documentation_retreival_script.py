"""
    This file contains all the code for retreiving
"""

import os

import chromadb
from sentence_transformers import SentenceTransformer
from config import DOCUMENTATION_CHROMA_DB_PATH

class Documentation_Retreival:
    def __init__(self, user_id: str, repo_id: str):
        self.user_id = user_id
        self.repo_id = repo_id

        self.client = chromadb.PersistentClient(path=DOCUMENTATION_CHROMA_DB_PATH)
        self.model = SentenceTransformer(os.getenv("DOCUMENT_EMBEDDING_MODEL"))

    def retreive_from_DB(self, query: str):
        """
            Retrieve similar context chunks based on query from Chrom DB

            Args:
                query (str): Entered user query

            Returns:
                context (str): Retreived Context
                metadata
        """
        
        # Get the collection
        collection = self.client.get_collection(name=self.user_id)

        # Generate query embedding
        query_embedding = self.model.encode(query, normalize_embeddings=True).tolist()
        
        # Retreive the collection
        results = collection.query(
            query_embeddings=[query_embedding],
            n_results=3,
            include=["documents", "metadatas", "distances"]
        )
        return self.format_results(results)

    def format_results(self, results):
        """Format the query results in a readable way"""
        formatted_results = []
        
        if results['documents']:
            for i, (doc, metadata, distance) in enumerate(zip(
                results['documents'][0], 
                results['metadatas'][0], 
                results['distances'][0]
            )):
                formatted_results.append({
                    'rank': i + 1,
                    'document': doc,
                    'metadata': metadata,
                    'similarity_score': 1 - distance,  # Convert distance to similarity
                    'distance': distance
                })
        
        return formatted_results