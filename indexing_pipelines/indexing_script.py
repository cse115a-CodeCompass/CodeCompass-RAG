"""
┌───────────────────────────────────────────────────────────────────────────┐
│                          INDEXING PIPELINE HEAD                           │
├───────────────────────────────────────────────────────────────────────────┤
│ `Indexing_Pipeline_Head` is responsible for scanning a directory and      │
│ dispatching each file to the correct indexing pipeline based on its type. │
│                                                                           │
│ Dispatch Flow:                                                            │
│                                                                           │
│                          ┌──────────────────────┐                         │
│        Directory  ─────> │    dispatch_files    │ ─────────────┐          │
│                          └──────────────────────┘              │          │
│                                     │                          │          │
│                                     │                          │          │
│                                     ▼                          ▼          │
│                         ┌─────────────────┐        ┌────────────────────┐ │
│                         │  Code Indexing  │        │ Documentation Index│ │
│                         │     Pipeline    │        │      Pipeline      │ │
│                         └─────────────────┘        └────────────────────┘ │
│                                                                           │
│ File Routing Rules:                                                       │
│  • Code files → .py, .js, .ts, .java, .cpp, .c, .h                        │
│  • Documentation files → .md, .txt, .pdf                                  │
│  • Other file types are currently ignored                                 │
└───────────────────────────────────────────────────────────────────────────┘
"""


import os

from documentation_pipeline.document_indexing_script import Document_Indexing 


class Indexing_Pipeline_Head():
    def __init__(self, dir_path: str, user_id: str,repo_id: str):
        self.dir_path = dir_path
        self.user_id = user_id
        self.repo_id = repo_id
        
    def dispatch_files(self):
        """
            This function goes through each file in the cloned folder, looks at its file extension and then decides which Pipeline to pass it to.
            > Text, Markdown and PDF files are dispatched to the Docu. Indexing Pipeline
            > Code files are dispatched to the Code Indexing Pipeline

            Args:
                - Doesn't take any args, all required args are passed when the obj for this class is instantiated
            Return:
                - returns Success on Indexing all files in the dir
                - Returns Internal Error if theres an Error during Indexing
        """

        directory = self.dir_path

        CODE_EXTENSIONS = {'.py', '.js', '.ts', '.java', '.cpp', '.c', '.h',}
        DOC_EXTENSIONS = {'.md', '.txt', '.pdf'}

        # os.listdir(dir) returns list of all files in dir
        print(os.listdir(directory))
            
        for root, dirs, files in os.walk(directory):
            for filename in files:
                full_path = os.path.join(root, filename)
                # Extract extension
                _, ext = os.path.splitext(filename)
                ext = ext.lower()
                if ext in CODE_EXTENSIONS:
                    # Pass the file to the Code Indexing Pipeline
                    self.Call_Code_Indexing_Pipeline(full_path)
                    #print(filename)
                elif ext in DOC_EXTENSIONS:
                    # Pass the file to the Document Indexing Pipeline
                    self.Call_Document_Indexing_Pipeline(full_path)
                    print(filename, ext)
                else:
                    # If the file type is neither code (the languages we handle) or documentation
                    # For now we skip indexing the file, but in future we could add handling for this
                    continue
                
        return

    def Call_Code_Indexing_Pipeline(self, file_path: str):
        """
            This function passes the given file into the 
        """
        
        

        return

    def Call_Document_Indexing_Pipeline(self, filepath: str):
        """
            - This function pass the given file into the Docu. Indexing Pipeline.
            - The single .txt/.md/.pdf file is parsed, chunked and stored as an embedding in a Chroma Vector DB
        """
        doc_indexer = Document_Indexing(self.repo_id)

        doc_indexer.Index_File(filepath)

        return



# This main is only for testing purposes
def main():
    obj = Indexing_Pipeline_Head("/home/mann/CodeCompass-RAG", "Repo-Test1")

    obj.dispatch_files()

    return

if __name__ == "__main__":
    main()
