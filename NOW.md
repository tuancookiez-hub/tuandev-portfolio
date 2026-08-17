# NOW — Portfolio

## Systems world — LIVE 5-tier (gh-pages 420d73c, main 85b1abf)

### Tier map
1. **L1 overview** — static KPI dashboard (white bg)
2. **L2 aiclient** — AIClient2API console (transitions to grey bg)
3. **L3 flow** — Kernel viz (react-force-graph tutorial pattern: node/edge swap per pass, clean setCenter pan, particle edges)
4. **L4 reports** — flip-page PDF viewer (dark bg)
5. **L5 swarm** — 3D force-directed graph (react-force-graph-3d + Three.js, lazy-loaded) with bottom HUD

### Key lessons
- **L3 (KernelViz)**: rewritten per tutorial — simple node/edge swap, no hidden/opacity tricks, no rAF counter loops
- **L5 (SwarmGraph)**: rewritten — removed all ref calls (`graphData`, `cameraPosition`, `width/height`) that crashed the app. Now purely prop-driven. `react-force-graph-3d` handles re-renders automatically.
- **Background wash**: L1 white → L2 grey (#c8cdcc) → L3+ dark (#1a2435) with smooth 800ms text color transitions
- **Lazy loading**: SwarmGraph lazy-loaded from SystemsWorld via `React.lazy` + Suspense

### Deps
@xyflow/react (L3), react-force-graph-3d + three (L5 lazy, code-split 580KB chunk)

## Deployed
gh-pages 420d73c, main 85b1abf. Verified: L3 = 9 nodes, 20 edges, particles streaming; L5 = 3D graph + 5 HUD panels, zero errors.
