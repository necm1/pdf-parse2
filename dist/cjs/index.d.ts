/// <reference types="node" />
import { PDFDocumentProxy, PDFPageProxy } from 'pdfjs-dist';
import { PDFOptions, PDFReturn, RenderOptions } from './interface';
/**
 * Represents a PDF parser for extracting text and metadata from PDF files.
 * This class provides functionality to load a PDF file, parse its content, and extract
 * text from each page along with document metadata. It leverages pdf.js for handling
 * PDF files in a browser or Node.js environment.
 *
 * Example usage:
 * ```typescript
 * const parser = new PDFParse();
 * const pdfData = await parser.loadPDF(buffer);
 * console.log(pdfData.text); // Outputs the text content of the PDF
 * ```
 *
 * @remarks
 * This class requires pdf.js to be included in your project as a dependency.
 *
 * @see {@link https://mozilla.github.io/pdf.js/} for pdf.js library.
 */
export default class PDFParse {
    /**
     * A reference to the loaded PDF document.
     * This property holds the instance of the PDFDocumentProxy returned by pdf.js
     * once a PDF file is successfully loaded. It provides access to the document's
     * pages and metadata. The value is `null` until a PDF is loaded using the `loadPDF` method.
     *
     * @private
     * @type {PDFDocumentProxy | null}
     */
    private _file;
    /**
     * Load and parse a PDF file.
     *
     * @param {Buffer | ArrayBuffer} src - The source of the PDF file. Can be a Buffer (Node.js) or ArrayBuffer (Browser).
     * @param {Partial<PDFOptions>} [options] - Optional. Configuration options for PDF parsing.
     * @returns {Promise<PDFReturn | null>} A Promise that resolves to a PDFReturn object containing the parsed data, or null in case of an error.
     */
    loadPDF(src: Buffer | ArrayBuffer, options?: Partial<PDFOptions>): Promise<PDFReturn | null>;
    /**
     * Renders text content from a PDF page.
     *
     * @param {PDFPageProxy} pageData - The PDF page to render.
     * @param {RenderOptions} [options] - Rendering options.
     * @returns {Promise<string>} A promise that resolves to the text content of the page.
     */
    renderPage(pageData: PDFPageProxy, options?: RenderOptions): Promise<string>;
    /**
     * PDF File
     *
     * @public
     * @returns {PDFDocumentProxy | null}
     */
    get file(): PDFDocumentProxy | null;
}
