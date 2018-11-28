from tkinter import *
from tkinter.filedialog import askopenfilename

class FileProcessor:
    fileBlob = None
    root = None

    def __init__(self):
        root = Tk()
        root.filename = askopenfilename(initialdir="",
                           filetypes =(("Text File", "*.txt"),("All Files","*.*")),
                           title = "Choose a file."
                           ) 
        print(root.filename)
        root.withdraw()
