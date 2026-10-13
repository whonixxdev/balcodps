import React from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import SmoothScroll from "./components/animations/SmoothScroll";
import App from "./App.tsx";
import "./App.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <SmoothScroll>
        <App />
      </SmoothScroll>
    </BrowserRouter>
  </React.StrictMode>,
);
