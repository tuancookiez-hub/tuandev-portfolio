# NOW — Portfolio

## Systems world — LIVE 5-tier escalation (deployed 2f58d0f gh-pages / 38f8cee main)

Corrected the tier structure — the markdown (React Flow) ≠ video (organic network). They are different complexity levels.

### Tier map
1. **L1 overview** — static KPI dashboard (availability, latency, error rate, requests), bar chart, donut, utilization, service health.
2. **L2 aiclient** — `AiClientConsole.tsx`: provider pool (Kimi/DeepSeek/Claude/GPT/Grok/Qwen with health dot + latency + shared/dedicated), golden routing signals (latency p50, tokens/min, cost/1k) with sparklines, live routing workflow table (req/model/route/status).
3. **L3 flow** — `KernelViz.tsx` (React Flow): operator fusion graph, 4 auto-playing passes, particle edges, SEC/BLOCK counter.
4. **L4 reports** — `PdfViewer.tsx`: **flip-page 3D page-turn** reader (next/prev rotateY)+ **mobile overflow fixed** (sheet caps to viewport, scale 0.94 on <760px).
5. **L5 network** — `OrganicNetwork.tsx`: canvas-rendered organic agentic network (drifting glowing clusters magenta/cyan/red, particles streaming on curved edges, panels slide in from sides with metrics/logs/cost gauge, graph fades in over 1.6s).

### Verified live
5 stages, zero errors. aiclient 6/3, flow 6 nodes, reports canvas, network canvas/2 panels.

### Deps
@xyflow/react 12.11.3 (L3). Bundle ~1.94MB.

### Source of truth for tier intent
The user corrected: video attached = **level 5** (most advanced/heavy, more compelling to replicate); markdown tutorial = **level 2 or 3**. Do not conflate them.
