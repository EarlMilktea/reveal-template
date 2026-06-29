/// <reference types="vite/client" />

import "reveal.js/reset.css";
import "reveal.js/reveal.css";
import "./custom.css.ts";
import "./global.css.ts";

import assert from "minimalistic-assert";
import { StrictMode } from "react";

import App from "./App.tsx";

const root = document.querySelector("#root");
assert(root);

const { createRoot } = await import("react-dom/client");

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
