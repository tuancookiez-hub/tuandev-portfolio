"use client";

/**
 * Built-in PDF viewer — a real flip-book using StPageFlip (page-flip).
 * Renders a real .pdf with realistic 3D page-turn, shadow, drag, and fold corners.
 * Uses pdfjs-dist to count pages first, then renders each as a <Page> inside
 * StPageFlip's HTML-based flip engine.
 */

import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { PageFlip } from "page-flip";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

export default function PdfViewer({
  src,
  label,
}: {
  src: string;
  label: string;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const flipRef = useRef<PageFlip | null>(null);
  const [numPages, setNumPages] = useState(0);
  const [page, setPage] = useState(0);
  const [portrait, setPortrait] = useState(false);
  const [ready, setReady] = useState(false);

  // Count pages on mount
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const doc = await pdfjs.getDocument(src).promise;
        if (!cancelled) {
          setNumPages(doc.numPages);
          setReady(true);
        }
      } catch (e) {
        console.error("PDF load error", e);
      }
    })();
    return () => { cancelled = true; };
  }, [src]);

  // Initialize StPageFlip after pages render
  useEffect(() => {
    if (!ready || numPages === 0 || !hostRef.current) return;

    const el = hostRef.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const timer = setTimeout(() => {
      const pages = el.querySelectorAll(".sys-pdf-page");
      if (pages.length === 0) return;

      const book = new PageFlip(el, {
        width: 430,
        height: 600,
        size: "stretch",
        minWidth: 260,
        maxWidth: 540,
        minHeight: 380,
        maxHeight: 720,
        drawShadow: true,
        flippingTime: reduced ? 300 : 950,
        usePortrait: true,
        showCover: false,
        autoSize: false,
        maxShadowOpacity: 0.62,
        mobileScrollSupport: true,
        swipeDistance: 24,
        clickEventForward: true,
        useMouseEvents: true,
        showPageCorners: true,
      });

      book.loadFromHTML(Array.from(pages) as HTMLElement[]);
      book.on("flip", (event) => setPage(event.data as number));
      book.on("init", (event) => {
        const mode = (event.data as unknown as { mode?: string })?.mode;
        setPortrait(mode === "portrait");
      });
      book.on("changeOrientation", (event) => setPortrait(event.data === "portrait"));
      flipRef.current = book;
    }, 200);

    return () => {
      clearTimeout(timer);
      flipRef.current?.destroy();
      flipRef.current = null;
    };
  }, [ready, numPages, src]);

  const turn = (delta: number) => {
    const book = flipRef.current;
    if (!book) return;
    if (delta > 0) {
      if (page >= numPages - 1) return;
      book.flipNext("top");
    } else {
      if (page <= 0) return;
      book.flipPrev("top");
    }
  };

  const total = portrait ? numPages : Math.max(1, Math.ceil(numPages / 2));
  const current = portrait ? page + 1 : Math.min(total, Math.floor(page / 2) + 1);
  const atStart = page === 0;
  const atEnd = portrait ? page >= numPages - 1 : page >= numPages - 2;

  return (
    <div className="sys-pdf">
      <div className="sys-pdf-toolbar">
        <span className="sys-pdf-title">{label}</span>
        <div className="sys-pdf-controls">
          <button type="button" onClick={() => turn(-1)} disabled={atStart || !ready} aria-label="Previous page">‹</button>
          <span className="sys-pdf-count">{current} / {total || "…"}</span>
          <button type="button" onClick={() => turn(1)} disabled={atEnd || !ready} aria-label="Next page">›</button>
        </div>
      </div>

      <div className="sys-pdf-stage">
        {!ready && <div className="sys-pdf-loading">Loading document…</div>}
        {ready && (
          <div className="sys-pdf-flip" ref={hostRef}>
            {Array.from({ length: numPages }, (_, i) => (
              <div key={i} className="sys-pdf-page" data-density={i === 0 || i === numPages - 1 ? "hard" : "soft"}>
                <Document file={src} loading={null} error={null}>
                  <Page
                    pageNumber={i + 1}
                    scale={1}
                    renderTextLayer
                    renderAnnotationLayer
                    width={430}
                  />
                </Document>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="sys-pdf-foot">
        <span>Flip-book viewer — StPageFlip</span>
        <span>{label} · sample</span>
      </div>
    </div>
  );
}
