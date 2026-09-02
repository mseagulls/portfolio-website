const extract = require('pdf-text-extract');
const path = require('path');

const pdfPath = path.join(__dirname, 'src/assets/Resume.pdf');

extract(pdfPath, function (err, pages) {
  if (err) {
    console.error('Error extracting PDF:', err);
    process.exit(1);
  }

  console.log('=== RESUME TEXT CONTENT ===\n');
  pages.forEach((pageText, index) => {
    console.log(`Page ${index + 1}:`);
    console.log(pageText);
    console.log('\n--- End of Page ' + (index + 1) + ' ---\n');
  });
});
