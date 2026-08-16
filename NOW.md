# NOW — Portfolio

## Systems world — LIVE ops dashboard (rebuilt + deployed)

Full rework addressing Tuna feedback: no more scroll-scrubbing. Every animation is a **gesture/scroll-triggered entrance** — plays once when the section enters view, then stops.

### Three sequential scroll stages (each min-height 100svh, no absolute stacking)
1. **Operations overview** — professional dashboard: KPI tiles (availability, latency p95, error rate, requests/sec), traffic-by-hour bar chart, donut capacity gauge, CPU/mem/disk utilization bars, service-health status list. Numbers count up from 0 (motion useInView + spring).
2. **Routing** — 3 line charts (latency/tokens/cost) that draw on entry + anime.js routing diagram that plays once (IntersectionObserver).
3. **Reports** — built-in PDF reader (react-pdf) for a sample inspection report.

### Files
- `src/worlds/SystemsWorld.tsx` — 3-stage layout, gesture-triggered entrances
- `src/components/SystemsWidgets.tsx` — CountUp, KpiTile, Donut, BarChart, UsageRow, StatusRow, Sparkline, Panel
- `src/components/bklit/AnimatedChart.tsx` — draws on useInView + hover tooltip
- `src/components/RoutingDiagram.tsx` — anime.js timeline, plays once on intersect
- `src/components/PdfViewer.tsx` — inline PDF reader

### Deployed
- main `9fefa6c`, gh-pages `9b30548` (Pages built)
- Verified live: 4 KPI tiles/7 bars/1 donut/5 status, count-up reaches 99.97%, 3 charts + diagram, PDF renders, 0 errors

### Research basis
Generic things people monitor (LogicMonitor golden signals + UptimeRobot/Netdata infra + SimpleKPI ops KPIs): availability, latency p95/p99, error rate, throughput/requests-ps, CPU/memory/disk utilization, service health.
