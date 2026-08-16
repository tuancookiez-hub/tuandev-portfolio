import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// base "./" keeps the static build portable for GitHub Pages later.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",
});
