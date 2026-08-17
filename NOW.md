# NOW — Portfolio

## Systems world — LIVE 5-tier (425208d gh-pages / c67922f main)

### Tier map
1. **L1 overview** — static KPI dashboard (white bg)
2. **L2 aiclient** — AIClient2API console (transitions to grey bg)
3. **L3 flow** — React Flow kernel viz with pan-right camera tracking (transitions to dark)
4. **L4 reports** — flip-page PDF viewer (dark bg)
5. **L5 swarm** — 3D force-directed graph (react-force-graph-3d + Three.js, lazy-loaded) with bottom HUD

### Recent fixes
- **Background wash**: L1 white → L2 grey (#c8cdcc at ~22%) → L3+ dark (#1a2435 at ~38%)
- **Text adaptation**: dark theme CSS variables override --sys-ink/--sys-soft; transition: color 800ms
- **L5 lazy-load**: React.lazy + Suspense so Three.js doesn't crash the app
- **L5 HUD**: run log, access ledger, throughput, action heat, blast radius, bot status, spend gauge

### Deps
@xyflow/react (L3), react-force-graph-3d + three (L5 lazy)

## Deployed
gh-pages 425208d, main c67922f. Verified: 5 stages, zero errors, wash transitions.
