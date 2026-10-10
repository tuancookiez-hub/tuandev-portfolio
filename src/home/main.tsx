import { createRoot, hydrateRoot } from "react-dom/client";
import HomePage from "./HomePage";
import "./home.css";

const root = document.getElementById("root");
if (root === null) {
  throw new Error("Root element #root not found");
}

// The production build pre-renders HomePage into #root; dev serves it empty.
if (root.hasChildNodes()) hydrateRoot(root, <HomePage />);
else createRoot(root).render(<HomePage />);
