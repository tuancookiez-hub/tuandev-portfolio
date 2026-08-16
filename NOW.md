# NOW — Portfolio

## Systems world — LIVE (4-stage narrative)

Four sequential scroll sections, gesture-triggered entrance animations, resolution-adaptive:

### Stage 1 — Operations overview
Professional dashboard: KPI tiles (availability, latency p95, error rate, requests/sec), traffic bar chart, donut gauge, CPU/mem/disk utilization, service health. Count-ups from 0 on scroll-entry.

### Stage 2 — Kernel optimization visualizer (NEW)
**Xenova/Kimi Linear-style** React Flow graph (`src/components/KernelViz.tsx`, @xyflow/react 12.11.3):
- Soft layered pill nodes with neon glow on fusion, particles flowing along bezier edges
- Four fusion passes auto-play: graph construction → first fusion wave → attention fusion → fused kernel (node count 10→5, throughput 65→97.8%)
- Play/pause + step indicator controls, SEC/BLOCK metrics counter board
- Matches the reference video the user attached.

### Stage 3 — Routing
3 line charts (latency/tokens/cost) draw on entry + anime.js routing diagram plays once.

### Stage 4 — Reports
Built-in PDF reader showing beautiful pdfcn-style inspection report (summary cards, progress table w/ risk pills, bar graph, highlights) generated via Playwright print-to-PDF.

## Deployed
- main `0f1ef307`..., gh-pages `e165f3a` (Pages built)
- Verified live: 4 stages, kernel visualizer renders (6 nodes, counter, auto-play), 0 errors

## Bundle note
@xyflow/react added ~190KB; total JS now ~1.96MB. pdfjs + react-flow + anime + visx stack.
