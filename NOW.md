# NOW — Portfolio

- Systems rebuilt as three-phase professional dashboard + two new showcase features:
  1. **Three phases**: Hero stat (99.97%) → animated routing charts (latency/tokens/cost) → glass cards finale with heatmap
  2. **Routing diagram** (`src/components/RoutingDiagram.tsx`): anime.js v4 scrubbed SVG — base path in phase 2, complexity grows in phase 3. 0 errors, nodes visible.
  3. **Built-in PDF viewer** (`src/components/PdfViewer.tsx`): react-pdf inline reader with pagination + zoom. Shows a generic sample inspection report. Zero errors.
- Zero console errors at any phase. Mobile 390px clean. Reduced-motion graceful.
- New deps: `react-pdf@10.4.1`, `animejs@4.5.0`. Bundle ~1.8MB.
- Committed locally to `main` (unpushed). Waiting on Tuan review.
- pdfcn (shadcn-labs) noted for future: PDF report generation showcase, but not needed now since react-pdf handles viewing.
