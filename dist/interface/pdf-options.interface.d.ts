import { PDFPageProxy } from 'pdfjs-dist';
export interface PDFOptions {
    pageRender: (pageData: PDFPageProxy) => Promise<string>;
    maxPages: number;
}
//# sourceMappingURL=pdf-options.interface.d.ts.map