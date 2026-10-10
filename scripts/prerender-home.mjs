// Renders the homepage to static HTML after `vite build`, so crawlers and
// link checkers see the real content. Usage: node scripts/prerender-home.mjs
import { build } from "vite";
import { readFile, writeFile, rm } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const outDir = `${root}dist-ssr`;

await build({
  root,
  logLevel: "warn",
  build: { ssr: "src/home/entry-server.tsx", outDir, emptyOutDir: true, rollupOptions: { input: "src/home/entry-server.tsx" } },
});

const { render } = await import(pathToFileURL(`${outDir}/entry-server.js`).href);
const page = `${root}dist/index.html`;
const html = await readFile(page, "utf8");
const marker = '<div id="root"></div>';
if (!html.includes(marker)) throw new Error("prerender: #root marker not found in dist/index.html");
await writeFile(page, html.replace(marker, `<div id="root">${render()}</div>`));
await rm(outDir, { recursive: true, force: true });
console.log("prerender: dist/index.html rendered");
