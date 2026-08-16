"use client";

/**
 * Built-in PDF viewer — renders a real .pdf inline with pagination + zoom.
 * This is the "how a PDF would be shown on a business site" showcase.
 * Uses react-pdf (pdfjs-dist). The sample PDF is a clearly-labeled generic
 * inspection report; no client or site data is represented.
 */

import { Document, Page, pdfjs } from "react-pdf";
import { useCallback, useEffect, useState } from "react";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

// Configure pdfjs worker for Vite
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

export default function PdfViewer({
  src,
  label,
  initialPage = 1,
}: {
  src: string;
  label: string;
  initialPage?: number;
}) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [page, setPage] = useState(initialPage);
  const [zoom, setZoom] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const onDocLoad = useCallback(({ numPages: n }: { numPages: number }) => {
    setNumPages(n);
    setLoading(false);
  }, []);

  const onError = useCallback((e: unknown) => {
    console.error("PDF render error", e);
    setError("Could not render this PDF.");
    setLoading(false);
  }, []);

  useEffect(() => setPage(1), [src]);

  return (
    <div className="sys-pdf">
      <div className="sys-pdf-toolbar">
        <span className="sys-pdf-title">{label}</span>
        <div className="sys-pdf-controls">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page <= 1}
            aria-label="Previous page"
          >
            ←
          </button>
          <span className="sys-pdf-count">
            {page} / {numPages ?? "…"}
          </span>
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(numPages ?? 1, p + 1))}
            disabled={numPages !== null && page >= numPages}
            aria-label="Next page"
          >
            →
          </button>
          <button type="button" onClick={() => setZoom((z) => Math.max(0.6, z - 0.2))} aria-label="Zoom out">−</button>
          <span className="sys-pdf-zoom">{Math.round(zoom * 100)}%</span>
          <button type="button" onClick={() => setZoom((z) => Math.min(2, z + 0.2))} aria-label="Zoom in">+</button>
        </div>
      </div>

      <div className="sys-pdf-stage">
        {loading && <div className="sys-pdf-loading">Loading document…</div>}
        {error && <div className="sys-pdf-error">{error}</div>}
        {!error && (
          <Document
            file={src}
            onLoadSuccess={onDocLoad}
            onLoadError={onError}
            loading={<div className="sys-pdf-loading">Loading document…</div>}
            error={<div className="sys-pdf-error">Could not load PDF.</div>}
          >
            <Page
              pageNumber={page}
              scale={zoom}
              renderTextLayer
              renderAnnotationLayer
              width={720}
            />
          </Document>
        )}
      </div>

      <div className="sys-pdf-foot">
        <span>Inline document viewer — react-pdf</span>
        <span>{label} · sample</span>
      </div>
    </div>
  );
}
