import { renderToString } from "react-dom/server";
import HomePage from "./HomePage";

// Build-time only: scripts/prerender-home.mjs injects this into dist/index.html.
export function render(): string {
  return renderToString(<HomePage />);
}
