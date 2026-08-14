import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" keeps the static build portable for GitHub Pages later.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
