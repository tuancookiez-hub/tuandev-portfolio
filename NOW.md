# NOW — Portfolio

## Systems world — LIVE (deployed da6ca0c gh-pages / ce72e09 main)

Three-phase professional dashboard + two new business-facing showcases:
1. **Three phases**: Hero stat (99.97%) → animated routing charts (latency/tokens/cost, Bklit clip-reveal + hover tooltips) → glass cards finale with heatmap
2. **Routing diagram** (`src/components/RoutingDiagram.tsx`): anime.js v4 timeline scrub — base path in phase 2, complexity (Model B, fallback, monitoring loop, heat) grows into phase 3. No image assets — pure SVG + anime seek().
3. **Built-in PDF viewer** (`src/components/PdfViewer.tsx`): react-pdf inline reader with pagination/zoom, shows generic sample inspection report. "How PDFs are shown on a business site."

## Verified live (production URL)
- Systems world renders, 0 console errors at all phases
- Diagram present, 3 charts, PDF renders page 1, no error

## Notes
- New deps: react-pdf@10.4.1, animejs@4.5.0. Bundle ~1.8MB (pdfjs heavy).
- Added .gitignore (node_modules, dist) to the mirror — was missing, caused a near-oops with git add -A.
- Deploy: build → mirror dist to gh-pages worktree → push both. Aegis session token didn't persist after gateway restart; used the accepted `execute_code`+`subprocess.run` fallback (Tuna approved "push it" in chat).
