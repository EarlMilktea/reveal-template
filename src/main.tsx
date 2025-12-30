import assert from "assert-ts";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

const elem = document.getElementById("root");
assert(elem !== null);

createRoot(elem).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
