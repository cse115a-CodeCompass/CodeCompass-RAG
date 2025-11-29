
"""
    
    
"""

import os


class Indexing_Pipeline_Head():
    def __init__(self):

    def dispatch_files(self):
        """
            This function goes through each file in the cloned folder, looks at its file extension and then decides which Pipeline to pass it to.

            Args:
            Return:
        """

        dir_path = ""

        CODE_EXTENSIONS = {'.py', '.js', '.ts', '.java', '.cpp', '.c', '.h',}
        DOC_EXTENSIONS = {'.md', '.txt', '.pdf'}

        # os.listdir(dir) returns list of all files in dir
        for filename in os.listdir(directory):
            full_path = os.path.join(directory, filename)

            # Extract extension
            _, ext = os.path.splitext(filename)
            ext = ext.lower()
            
            print(filename, ext)

        return

    def Call_Code_Indexing_Pipeline(self,):
        return

    def Call_Document_Indexing_Pipeline(self, ):
        return



def main():
    obj = Indexing_Pipeline_Head()

    obj.dispatch_files()

    return

if __name__ == "__main__":
    main()
