import os
from ollama import chat
from ollama import ChatResponse
from pathlib import Path
from dotenv import load_dotenv
from langchain_chroma import Chroma
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain.prompts import ChatPromptTemplate
from code_indexing import CodeIndexer
from prompt import RAG_PROMPT

load_dotenv()
OPENAI_API_KEY = os.environ["OPENAI_API_KEY"]
persist_directory = str(Path("./chroma_db"))
test_directory = str(Path("./test_files"))
indexer = CodeIndexer(test_directory)
indexer.index_directory()
indexer.save_to_db()
vectorstore = Chroma(
    persist_directory=persist_directory,
    collection_name="codecompass_collection",
    embedding_function=OpenAIEmbeddings(),
)
retriever = vectorstore.as_retriever(search_kwargs={"k": 1})
question = input("codecompass#: ")
while question != "\\q" and True:
    docs = retriever.invoke(question) 
 
    context = "\n\n".join(
         f"[{d.metadata.get('path','?')}:L{d.metadata.get('start_line','?')}-{d.metadata.get('end_line','?')}]\n{d.page_content}"
        for d in docs
    )

    prompt = RAG_PROMPT.format(context=context, question=question)
    # print("prompt", prompt)

    response: ChatResponse = chat(model='phi3', messages=[
    {
        'role': 'user',
        'content': prompt,
    },
    ])

    with open("responses.md", "a") as f:
        f.write(prompt + "\n\n")
        f.write(response['message']['content'])
        f.write("\n-----------------------------------------\n")
    question = input("codecompass#: ")

print("Thank you for using CodeCompass!")