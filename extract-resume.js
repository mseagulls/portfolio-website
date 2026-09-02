const fs = require('fs');
const path = require('path');
const pdfjsLib = require('pdfjs-dist');

const pdfPath = path.join(__dirname, 'src/assets/Resume.pdf');

async function extractPdf() {
  try {
    const dataBuffer = fs.readFileSync(pdfPath);
    const uint8Array = new Uint8Array(dataBuffer);
    const pdf = await pdfjsLib.getDocument({ data: uint8Array }).promise;
    let text = '';

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      const pageText = content.items.map((item) => item.str).join(' ');
      text += pageText + '\n';
    }

    console.log('=== RESUME TEXT CONTENT ===\n');
    console.log(text);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

extractPdf();
