import os
from pathlib import Path
from dotenv import load_dotenv

from langchain_chroma import Chroma
from langchain_openai import OpenAIEmbeddings
from ollama import chat, ChatResponse

from code_indexing import CodeIndexer
from prompt import RAG_PROMPT
from process_graph import index_graph_into_vectors, node_text

# If you have NodeLabel enum, import it (optional: you can also use strings)
try:
    from graph_model import NodeLabel
    ALLOWED_LABELS = {NodeLabel.CLASS, NodeLabel.FUNCTION, NodeLabel.METHOD}
except Exception:
    ALLOWED_LABELS = {"class", "function", "method"}  # fallback to strings

def assemble_context_from_seeds_and_neighbors(KG, seed_docs, neighbor_ids, *, max_chars=8000) -> str:
    """
    Build the final context string:
      - seeds first (what the vector search returned)
      - then graph neighbors (k-hop expansion)
    """
    parts = []
    total = 0

    # 1) Seed docs (already come with text + metadata)
    for d in seed_docs:
        header = (
            f"# {d.metadata.get('label','def')} {d.metadata.get('name','?')}\n"
            f"({d.metadata.get('path','?')}:{d.metadata.get('start_line','?')}-{d.metadata.get('end_line','?')})\n"
        )
        chunk = header + d.page_content + "\n\n"
        if total + len(chunk) > max_chars:
            break
        parts.append(chunk)
        total += len(chunk)

    # 2) Graph neighbors (fetch text on demand from the KG)
    for nid in neighbor_ids:
        n = KG.nodes.get(nid)
        if not n:
            continue
        try:
            txt = node_text(n)  # reads slice based on path + start_line/end_line
        except Exception:
            continue

        label = getattr(n.label, "value", str(n.label))
        header = f"# {label} {n.name}\n({n.path}:{n.start_line}-{n.end_line})\n"
        chunk = header + txt + "\n\n"
        if total + len(chunk) > max_chars:
            break
        parts.append(chunk)
        total += len(chunk)

    return "".join(parts)


def graphrag_context(KG, vectorstore: Chroma, query: str, *, k_seeds=3, hops=1, max_neighbors=20, max_chars=8000):
    """
    Vector seeds -> k-hop graph expansion -> assemble context.
    Returns: (context_str, seed_ids, neighbor_ids)
    """
    # 1) Vector search for seeds (keep scores if you want to debug)
    seeds = vectorstore.similarity_search_with_relevance_scores(query, k=k_seeds)
    seed_docs = [doc for (doc, _score) in seeds]
    seed_ids = [doc.metadata["node_id"] for (doc, _score) in seeds]

    # 2) Expand in the KG (both directions). Filter to definition nodes.
    neighbor_ids = KG.khop(
        seeds=seed_ids,
        hops=hops,
        allowed=ALLOWED_LABELS
    )
    # Remove the seeds themselves and cap
    seed_set = set(seed_ids)
    neighbor_ids = [nid for nid in neighbor_ids if nid not in seed_set][:max_neighbors]

    # 3) Assemble context (seeds first, then neighbors)
    context = assemble_context_from_seeds_and_neighbors(
        KG, seed_docs, neighbor_ids, max_chars=max_chars
    )
    return context, seed_ids, neighbor_ids


def main():
    load_dotenv()
    OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")

    persist_directory = str(Path("./chroma_db"))
    test_directory = str(Path("./test_files"))

    # 0) Build the KG (Step 1 hierarchy) and index definition nodes into vectors
    indexer = CodeIndexer(test_directory)
    KG = indexer.index_directory()
    vectorstore = index_graph_into_vectors(KG, persist_dir=persist_directory)

    print("GraphRAG ready. Type \\q to quit.")
    question = input("codecompass#: ")

    while question != "\\q":
        # Build GraphRAG context: vector seeds -> k-hop KG expansion
        context, seed_ids, neighbor_ids = graphrag_context(
            KG,
            vectorstore,
            question,
            k_seeds=3,     # seeds from vector DB
            hops=1,        # 1 hop: parent/children/siblings if your graph is wired that way
            max_neighbors=20,
            max_chars=8000
        )

        prompt = RAG_PROMPT.format(context=context, question=question)

        # Call your local LLM (Ollama)
        response: ChatResponse = chat(
            model="phi3",
            messages=[{"role": "user", "content": prompt}],
        )

        print("\n--- Answer ---\n")
        print(response["message"]["content"])
        print("\n--------------\n")

        # Optional: log/debug what got included
        # print("Seeds:", seed_ids)
        # print("Neighbors:", neighbor_ids)

        # Append to responses.md as before
        with open("responses.md", "a", encoding="utf-8") as f:
            f.write(prompt + "\n\n")
            f.write(response["message"]["content"])
            f.write("\n-----------------------------------------\n")

        question = input("codecompass#: ")

    print("Thank you for using CodeCompass!")

if __name__ == "__main__":
    main()
