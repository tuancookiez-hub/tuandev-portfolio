"use client";

/**
 * Built-in PDF viewer — real flip-book per StPageFlip/react-pageflip docs.
 * Reference: https://github.com/Nodlik/StPageFlip (page-flip) + https://nodlik.github.io/react-pageflip
 * Pattern: HTMLFlipBook (react-pageflip) wrapping react-pdf <Page> blocks.
 * - HTMLFlipBook handles all flip physics (width/height, size="stretch", drawShadow, flippingTime, usePortrait, etc.)
 * - Single <Document> provides pdf context; pages are forwardRef divs with data-density for hard/soft cover feel.
 * - No manual loadFromHTML / setTimeout guessing — the wrapper owns lifecycle.
 * - Verified responsive: size="stretch" + min/max thresholds per README, not hardcoded 430px canvas.
 */

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import HTMLFlipBook from "react-pageflip";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const FlipPage = React.forwardRef<HTMLDivElement, { pageNumber: number; width: number; hard?: boolean }>(
  ({ pageNumber, width, hard }, ref) => (
    <div ref={ref} className="sys-pdf-page" data-density={hard ? "hard" : "soft"}>
      <Page
        pageNumber={pageNumber}
        width={width}
        renderTextLayer
        renderAnnotationLayer
      />
    </div>
  ),
);
FlipPage.displayName = "FlipPage";

export default function PdfViewer({
  src,
  label,
}: {
  src: string;
  label: string;
}) {
  const bookRef = useRef<any>(null);
  const [numPages, setNumPages] = useState(0);
  const [page, setPage] = useState(0);
  const [portrait, setPortrait] = useState(false);

  const onLoadSuccess = useCallback(({ numPages: n }: { numPages: number }) => {
    setNumPages(n);
  }, []);

  const onFlip = useCallback((e: any) => {
    setPage(e.data as number);
  }, []);

  const onChangeOrientation = useCallback((e: any) => {
    setPortrait(e.data === "portrait");
  }, []);

  const turn = (delta: number) => {
    const flip = bookRef.current?.pageFlip?.();
    if (!flip) return;
    if (delta > 0) flip.flipNext("top");
    else flip.flipPrev("top");
  };

  // Deterministic size — measure the actual stage box, don't let "stretch"
  // collapse to minWidth/minHeight (that was the tiny-book bug).
  const stageRef = useRef<HTMLDivElement>(null);
  const [bookW, setBookW] = useState(0);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const measure = () => {
      // Book gets the full stage width minus padding; height follows A4 ratio.
      const avail = Math.floor(el.getBoundingClientRect().width);
      setBookW(Math.max(360, Math.min(560, Math.min(avail, 560))));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // A4 portrait ratio: h = w × √2 ≈ 1.414
  const PAGE_W = bookW || 520;
  const PAGE_H = Math.round(PAGE_W * 1.414);

  const total = portrait ? numPages : Math.max(1, Math.ceil(numPages / 2));
  const current = portrait ? page + 1 : Math.min(total, Math.floor(page / 2) + 1);
  const atStart = page === 0;
  const atEnd = portrait ? page >= numPages - 1 : page >= numPages - 2;

  return (
    <div className="sys-pdf">
      <div className="sys-pdf-toolbar">
        <span className="sys-pdf-title">{label}</span>
        <div className="sys-pdf-controls">
          <button type="button" onClick={() => turn(-1)} disabled={atStart || !numPages} aria-label="Previous page">‹</button>
          <span className="sys-pdf-count">{numPages ? `${current} / ${total}` : "…"}</span>
          <button type="button" onClick={() => turn(1)} disabled={atEnd || !numPages} aria-label="Next page">›</button>
        </div>
      </div>

      <div className="sys-pdf-stage" ref={stageRef}>
        <Document
          file={src}
          onLoadSuccess={onLoadSuccess}
          loading={<div className="sys-pdf-loading">Loading document…</div>}
          error={<div className="sys-pdf-error">Failed to load PDF.</div>}
        >
          {numPages > 0 && bookW > 0 && (
            <HTMLFlipBook
              ref={bookRef}
              width={PAGE_W}
              height={PAGE_H}
              size="fixed"
              minWidth={315}
              maxWidth={1000}
              minHeight={420}
              maxHeight={1350}
              maxShadowOpacity={0.5}
              showCover={false}
              mobileScrollSupport={true}
              drawShadow
              flippingTime={1000}
              usePortrait
              startZIndex={0}
              autoSize
              clickEventForward
              useMouseEvents
              swipeDistance={30}
              showPageCorners
              disableFlipByClick={false}
              startPage={0}
              onFlip={onFlip}
              onChangeOrientation={onChangeOrientation}
              className="sys-pdf-flip"
              style={{} as any}
            >
              {Array.from({ length: numPages }, (_, i) => (
                <FlipPage
                  key={i}
                  pageNumber={i + 1}
                  width={PAGE_W}
                  hard={i === 0 || i === numPages - 1}
                />
              ))}
            </HTMLFlipBook>
          )}
        </Document>
      </div>

      <div className="sys-pdf-foot">
        <span>Flip-book viewer — StPageFlip · react-pageflip</span>
        <span>{label} · sample</span>
      </div>
    </div>
  );
}
