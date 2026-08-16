"use client";

/**
 * Built-in PDF viewer — a flip-book style reader for the report.
 * Renders a real .pdf with a 3D page-turn transition, pagination, and zoom.
 * Responsive: the sheet caps at the container width so it never overflows the
 * mobile viewport. Uses react-pdf (pdfjs-dist). Sample report only.
 */

import { AnimatePresence, motion } from "motion/react";
import { Document, Page, pdfjs } from "react-pdf";
import { useCallback, useEffect, useState } from "react";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

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
  const [dir, setDir] = useState<1 | -1>(1);

  const onDocLoad = useCallback(({ numPages: n }: { numPages: number }) => {
    setNumPages(n);
    setLoading(false);
  }, []);

  const onError = useCallback((e: unknown) => {
    console.error("PDF render error", e);
    setError("Could not render this PDF.");
    setLoading(false);
  }, []);

  const go = useCallback((next: number, d: 1 | -1) => {
    setDir(d);
    setPage(next);
  }, []);

  useEffect(() => setPage(1), [src]);

  return (
    <div className="sys-pdf">
      <div className="sys-pdf-toolbar">
        <span className="sys-pdf-title">{label}</span>
        <div className="sys-pdf-controls">
          <button
            type="button"
            onClick={() => go(Math.max(1, page - 1), -1)}
            disabled={page <= 1}
            aria-label="Previous page"
            className="sys-pdf-fold prev"
          >
            ‹
          </button>
          <span className="sys-pdf-count">
            {page} / {numPages ?? "…"}
          </span>
          <button
            type="button"
            onClick={() => go(Math.min(numPages ?? 1, page + 1), 1)}
            disabled={numPages !== null && page >= numPages}
            aria-label="Next page"
            className="sys-pdf-fold next"
          >
            ›
          </button>
          <button type="button" onClick={() => setZoom((z) => Math.max(0.6, Math.round((z - 0.2) * 10) / 10))} aria-label="Zoom out">−</button>
          <span className="sys-pdf-zoom">{Math.round(zoom * 100)}%</span>
          <button type="button" onClick={() => setZoom((z) => Math.min(2, Math.round((z + 0.2) * 10) / 10))} aria-label="Zoom in">+</button>
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
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                className="sys-pdf-sheet"
                initial={{ rotateY: dir === 1 ? -42 : 42, opacity: 0.4, transformPerspective: 1300 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: dir === 1 ? 42 : -42, opacity: 0.2 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: dir === 1 ? "left center" : "right center" }}
              >
                <Page
                  pageNumber={page}
                  scale={zoom}
                  renderTextLayer
                  renderAnnotationLayer
                  width={720}
                />
              </motion.div>
            </AnimatePresence>
          </Document>
        )}
      </div>

      <div className="sys-pdf-foot">
        <span>Flip-book viewer — react-pdf</span>
        <span>{label} · sample</span>
      </div>
    </div>
  );
}
