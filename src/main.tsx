import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@/styles/index.css";
import App from "@/App.tsx";
import { ThemeProvider } from "@/components/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="system" storageKey="theme">
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>
);
