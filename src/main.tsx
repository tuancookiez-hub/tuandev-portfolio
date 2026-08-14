import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./styles/global.css";
import "./styles/landing.css";
import "./styles/restaurant.css";
import "./styles/cafe-book.css";
import "./styles/device-preview.css";
import "./styles/creative.css";

const root = document.getElementById("root");
if (root === null) {
  throw new Error("Root element #root not found");
}

createRoot(root).render(<App />);
