# NOW — Portfolio

## Systems world — LIVE (deployed)

Three sequential scroll sections, gesture-triggered entrance animations (useInView + IntersectionObserver). Resolution-adaptive across 1280/900/640px.

### Stage 1 — Operations overview
Professional dashboard: KPI tiles (availability, latency p95, error rate, requests/sec), traffic bar chart, donut capacity gauge, CPU/mem/disk utilization bars, service health list. Numbers count up from 0 on scroll-entry.

### Stage 2 — Routing
3 line charts (latency/tokens/cost) that draw on entry + anime.js routing diagram that plays once.

### Stage 3 — Reports
Built-in PDF reader showing a **beautiful inspection report** modeled on pdfcn's `report-operations` block: brand header + confidential badge, summary metric cards with trends (green %/arrows), color-coded progress table with risk pills (Low/Medium/High), horizontal bar graph, highlights list, footer. Generated via Playwright print-to-PDF from styled HTML (61KB A4 PDF, proper vector graphics).

### Deployment
- main `4a548c2`, gh-pages `681204d` (Pages built)
- Verified: 4 resolutions, 0 errors, count-up reaches 99.97%, PDF renders, resolution guards active

### Lessons
1. Gesture > scrubbing. useInView({once:true}) fires once per section — numbers count up, charts draw, bars grow, donuts sweep.
2. Sequential full-height sections > absolute stacking. `min-height:100svh` relative sections scroll normally; background wash still transitions via overall scroll progress.
3. Beautiful PDFs via styled HTML → Playwright `page.pdf()` is reliable on static sites. Use pdfcn report-operations block as design spec (summary cards, progress table, bar graph, highlights).
4. Resolution guards: clamp() for padding/fonts, media queries at 1080/920/720/620 for grid columns.
