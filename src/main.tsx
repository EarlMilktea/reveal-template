import "./global.css.ts";

import assert from "minimalistic-assert";
import { StrictMode } from "react";

import App from "./App.tsx";

const elem = document.querySelector("#root");
assert(elem);

const { createRoot } = await import("react-dom/client");

createRoot(elem).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
