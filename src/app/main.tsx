import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.scss";
import "./reset.scss";
import { Home } from "../pages";
import { Layout } from "./layouts/layout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout>
      <Home />
    </Layout>
  </StrictMode>,
);
