#!/usr/bin/env python3
import sys
import subprocess

# First, try to import PyPDF2, if not available, install it
try:
    import PyPDF2
except ImportError:
    print("Installing PyPDF2...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "PyPDF2", "-q"])
    import PyPDF2

pdf_path = r"c:\Users\mdspe\projects\Portfolio Website\ai-tool-nextjs-main\src\assets\Resume.pdf"

try:
    with open(pdf_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        print("=== RESUME TEXT CONTENT ===\n")
        
        for page_num in range(len(reader.pages)):
            page = reader.pages[page_num]
            text = page.extract_text()
            print(text)
            print("\n--- Page {} end ---\n".format(page_num + 1))
            
except Exception as e:
    print(f"Error: {e}", file=sys.stderr)
    sys.exit(1)
