import "./global.css.ts";

import assert from "minimalistic-assert";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

const elem = document.querySelector("#root");
assert(elem);

createRoot(elem).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
