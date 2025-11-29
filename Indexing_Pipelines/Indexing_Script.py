
"""
    
    
"""

import os


class Indexing_Pipeline_Head():
    def __init__(self, dir_path: str):
        pass

    def dispatch_files(self):
        """
            This function goes through each file in the cloned folder, looks at its file extension and then decides which Pipeline to pass it to.

            Args:
            Return:
        """

        directory = "/home/mann/CodeCompass-RAG"

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
                    print(filename)
                else:
                    # If the file type is neither code (the languages we handle) or documentation
                    # For now we skip indexing the file, but in future we could add handling for this
                    continue
                #print(full_path, filename, ext)
                
        return

    def Call_Code_Indexing_Pipeline(self, file_path: str):
        """
        """

        return

    def Call_Document_Indexing_Pipeline(self, filepath: str):
        """
        
        """

        return



def main():
    obj = Indexing_Pipeline_Head()

    obj.dispatch_files()

    return

if __name__ == "__main__":
    main()
