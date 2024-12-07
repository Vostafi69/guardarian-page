import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/reset.scss";
import "./styles/global.scss";
import { Home } from "../pages";
import { Layout } from "./layouts/layout";
import { LenisProvider } from "./providers/lenisProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout>
      <LenisProvider>
        <Home />
      </LenisProvider>
    </Layout>
  </StrictMode>,
);
