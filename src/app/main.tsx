import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.scss";
import "./reset.scss";
import { Home } from "../pages";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);
