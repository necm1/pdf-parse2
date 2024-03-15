import { Metadata } from 'pdfjs-dist/types/src/display/metadata';
export interface PDFReturn {
    totalPages: number;
    renderedTexts: number;
    info: Object | null;
    metadata: Metadata | null;
    text: string;
    version: string | null;
}
//# sourceMappingURL=pdf-return.interface.d.ts.map