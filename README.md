[![version](https://img.shields.io/npm/v/pdf-parse.svg)](https://www.npmjs.org/package/pdf-parse2)
[![downloads](https://img.shields.io/npm/dt/pdf-parse2.svg)](https://www.npmjs.org/package/pdf-parse2)
![license](https://img.shields.io/npm/l/pdf-parse2)
[![node](https://img.shields.io/node/v/pdf-parse2.svg)](https://nodejs.org/)
![type](https://img.shields.io/npm/types/pdf-parse2)
![size](https://img.shields.io/npm/unpacked-size/pdf-parse2)

# PDF Parse

A pure JavaScript, cross-platform module designed for extracting text from PDF files using [pdf.js](https://mozilla.github.io/pdf.js/).

## Features

- Extract text from PDF files.
- Supports both browser and Node.js environments.
- Easy to use with promise-based API.

## Installation

```bash
npm install pdf-parse2
```

Or

```bash
yarn add pdf-parse2
```

## Usage

### Node.js

```javascript
const fs = require('fs');
const PDFParse = require('pdf-parse2');

(async () => {
  const dataBuffer = fs.readFileSync('path/to/your/document.pdf');
  const PDFParse = new PDFParse();

  try {
    const pdfData = await PDFParse.loadPDF(dataBuffer);
    console.log('Text:', pdfData.text);
  } catch (error) {
    console.error(error);
  }
})();
```

### Browser

Ensure you include pdf.js library in your project. You can then use `PDFParse` similar to the Node.js example, but with fetching the PDF file using Fetch API or XMLHttpRequest.

## API Reference

- `loadPDF(src, options)`: Loads a PDF file and extracts text. `src` can be a `Buffer` or `ArrayBuffer`. `options` is optional.

- `renderPage(pageData, options)`: A helper function for rendering a single page. This function is used internally by `loadPDF`.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue for any bugs or feature requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
