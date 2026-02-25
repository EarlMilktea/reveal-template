import { globalStyle } from "@vanilla-extract/css";

globalStyle("#root", {
  height: "100%",
});

globalStyle("*", {
  boxSizing: "border-box",
  outline: import.meta.env.PROD ? undefined : "1px solid rgba(0 0 0 / 0.25)",
});
