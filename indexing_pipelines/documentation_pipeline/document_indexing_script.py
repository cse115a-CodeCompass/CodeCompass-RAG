"""
    This file contains all the functions pertaining to Indexing a users Documentation files(i.e. .txt, .md and .pdf files)

    If .pdf then the file is first parsed into .md.

    For .txt & .md, read the file, chunk the file and store embeddings in the Chroma VectorDB

    The collection name is the `user_id` and the chunks are tagged with `repo_id` in their metadata
"""

import os

import chromadb
from sentence_transformers import SentenceTransformer


# REMOVE THIS WHEN SCRIPT IS READY!
from dotenv import load_dotenv

load_dotenv()   # Loads .env into OS environment variables

EMBEDDING_MODEL = "BAAI/bge-small-en-v1.5"

DB_DIR = "./Documentation_chroma_db"
COLLECTION_NAME = "Mann"

client = chromadb.PersistentClient(path=DB_DIR)
collection = client.get_or_create_collection(
    name=COLLECTION_NAME,
    metadata={"hnsw:space": "cosine"},
)

################################################

class Document_Indexing():
    def __init__(self, repo_id: str):
        self.repo_id = repo_id
        pass

    def Index_File(self, filepath: str):
        """ 
            Args:
            Return:
        """
        
        # Extract extension
        filename = os.path.basename(filepath)
        _, ext = os.path.splitext(filename)

        #


        # There isn't a need for a default error check for the ext as that is handled earlir in the `indexing_script` before this function is called, we are gauranteed a valid file extension
        if ext == "pdf":
            pass
        else:
            # The ext is .md or .txt
            self.Index_text_md(filepath)

        return

    def Index_pdf(self, filepath: str):
        return

    def Index_text_md(self, filepath: str):
        
        # chunks is a generator object
        chunks = self.stream_chunks_from_file(filepath)

        model = SentenceTransformer(EMBEDDING_MODEL)

        # Embed Each chunk into the Chroma Vector DB
        for chunk in chunks:
            embedding = model.encode(texts, normalize_embeddings=True).tolist()




            print(chunk)
            print("+++++++++++++++++")

        return

    # This is a modular function
    # Replace this with more Sophisticated Chunking Strategy later!
    def stream_chunks_from_file(self, filepath: str, chunk_size: int = 800, chunk_overlap: int = 200):
        """
        - Streams chunks from the .txt/.md file one by one. 
        - Chunks based on fixed size + paragraphs

        Args:
            filepath: Path to the text file
            chunk_size: Maximum chunk size in characters
            chunk_overlap: Overlap size between chunks in characters

        Yields:
            chunk (str): text chunk
        """ 
        try:
            with open(filepath, "r", encoding="utf-8") as f:
                text = f.read()
        except FileNotFoundError:
            print(f"File not found: {filepath}")
            return
        except Exception as e:
            print(f"Error reading file: {e}")
            return

        text = text.replace("\r", "").strip()
        paragraphs = [p.strip() for p in text.split("\n\n") if p.strip()]

        current = ""
        for para in paragraphs:
            # If adding this paragraph would exceed chunk size and we have content
            if current and len(current) + len(para) > chunk_size:
                yield current.strip()
                # Start new chunk with overlap
                current = current[-chunk_overlap:] + "\n" + para
            else:
                # Add paragraph to current chunk
                if current:
                    current += "\n" + para
                else:
                    current = para  # First paragraph

        # Emit last chunk if not empty
        if current.strip():
            yield current.strip()


def main():
    return

if __name__ == "__main__":
    main()