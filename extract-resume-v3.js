const PDFParser = require('pdf2json');
const path = require('path');
const fs = require('fs');

const pdfPath = path.join(__dirname, 'src/assets/Resume.pdf');

let pdfParser = new PDFParser(this, 1);

pdfParser.on('pdfParser_dataError', (errData) => {
  console.error('PDF Error:', errData);
  process.exit(1);
});

pdfParser.on('pdfParser_dataReady', (pdfData) => {
  let text = '';

  // Extract text from all pages
  if (pdfData && pdfData.Pages) {
    pdfData.Pages.forEach((page, pageIndex) => {
      text += `\n--- Page ${pageIndex + 1} ---\n`;
      if (page.Texts) {
        page.Texts.forEach((textItem) => {
          if (textItem.R && textItem.R[0]) {
            // Decode the text content
            let str = decodeURIComponent(textItem.R[0].T);
            text += str + ' ';
          }
        });
      }
      text += '\n';
    });
  }

  console.log('=== RESUME TEXT CONTENT ===');
  console.log(text);
});

pdfParser.loadPDF(pdfPath);
