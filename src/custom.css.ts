import { globalStyle } from "@vanilla-extract/css";

const mainFont = "sans-serif";
const mainFontSize = "40px";
const mainColor = "#000";
const blockMargin = "20px";
const lineHeight = "1.3";
const headingMargin = "0 0 20px 0";
const headingFontWeight = "normal";
const heading1Size = "3.77em";
const heading2Size = "2.11em";
const heading3Size = "1.55em";
const heading4Size = "1em";
const codeFont = "monospace";
const linkColor = "#00008b";
const linkColorDark = "rgba(0 0 118 / 1)";
const selectionBackgroundColor = "rgba(0 0 0 / 0.99)";
const selectionColor = "#fff";

globalStyle(
  `.reveal section.has-dark-background,
.reveal section.has-dark-background h1,
.reveal section.has-dark-background h2,
.reveal section.has-dark-background h3,
.reveal section.has-dark-background h4,
.reveal section.has-dark-background h5,
.reveal section.has-dark-background h6`,
  {
    color: "#fff",
  },
);

globalStyle(".reveal", {
  fontFamily: mainFont,
  fontSize: mainFontSize,
  color: mainColor,
});

globalStyle(".reveal ::selection", {
  color: selectionColor,
  background: selectionBackgroundColor,
});

globalStyle(
  `.reveal .slides section,
.reveal .slides section > section`,
  {
    lineHeight,
  },
);

globalStyle(
  `.reveal h1,
.reveal h2,
.reveal h3,
.reveal h4,
.reveal h5,
.reveal h6`,
  {
    margin: headingMargin,
    fontWeight: headingFontWeight,
    lineHeight,
  },
);

globalStyle(".reveal h1", {
  fontSize: heading1Size,
});

globalStyle(".reveal h2", {
  fontSize: heading2Size,
});

globalStyle(".reveal h3", {
  fontSize: heading3Size,
});

globalStyle(".reveal h4", {
  fontSize: heading4Size,
});

globalStyle(".reveal p", {
  margin: `${blockMargin} 0`,
});

globalStyle(
  `.reveal h1:last-child,
.reveal h2:last-child,
.reveal h3:last-child,
.reveal h4:last-child,
.reveal h5:last-child,
.reveal h6:last-child`,
  {
    marginBottom: "0",
  },
);

globalStyle(
  `.reveal ol,
.reveal dl,
.reveal ul`,
  {
    display: "inline-block",
    textAlign: "left",
    margin: "0 0 0 1em",
  },
);

globalStyle(".reveal ul ul", {
  listStyleType: "square",
});

globalStyle(".reveal ul ul ul", {
  listStyleType: "circle",
});

globalStyle(
  `.reveal ul ul,
.reveal ul ol,
.reveal ol ol,
.reveal ol ul`,
  {
    display: "block",
    marginLeft: "40px",
  },
);

globalStyle(".reveal blockquote", {
  position: "relative",
  width: "70%",
  margin: `${blockMargin} auto`,
  padding: "5px",
  fontStyle: "italic",
  background: "rgba(255 255 255 / 0.05)",
  boxShadow: "0px 0px 2px rgba(0 0 0 / 0.2)",
});

globalStyle(
  `.reveal blockquote p:first-child,
.reveal blockquote p:last-child`,
  {
    display: "inline-block",
  },
);

globalStyle(".reveal pre", {
  position: "relative",
  width: "90%",
  margin: `${blockMargin} auto`,
  textAlign: "left",
  fontSize: "0.55em",
  fontFamily: codeFont,
  boxShadow: "0px 5px 15px rgba(0 0 0 / 0.15)",
  lineHeight,
});

globalStyle(".reveal code", {
  fontFamily: codeFont,
  textTransform: "none",
  tabSize: 2,
});

globalStyle(".reveal pre code", {
  display: "block",
  padding: "5px",
  overflow: "auto",
});

globalStyle(".reveal .code-wrapper", {
  whiteSpace: "normal",
});

globalStyle(".reveal .code-wrapper code", {
  whiteSpace: "pre",
});

globalStyle(".reveal table", {
  margin: "auto",
  borderCollapse: "collapse",
});

globalStyle(
  `.reveal table th,
.reveal table td`,
  {
    textAlign: "left",
    padding: "0.2em 0.5em 0.2em 0.5em",
    borderBottom: "1px solid",
  },
);

globalStyle(
  `.reveal table tbody tr:last-child th,
.reveal table tbody tr:last-child td`,
  {
    borderBottom: "none",
  },
);

globalStyle(".reveal small", {
  display: "inline-block",
  fontSize: "0.6em",
  verticalAlign: "top",
  lineHeight,
});

globalStyle(".reveal small *", {
  verticalAlign: "top",
});

globalStyle(".reveal img", {
  margin: `${blockMargin} 0`,
});

globalStyle(".reveal a", {
  transition: "color 0.15s ease",
});

globalStyle(".reveal .roll span:after", {
  color: "#fff",
  background: linkColorDark,
});

globalStyle(".reveal .r-frame", {
  border: `4px solid ${mainColor}`,
  boxShadow: "0 0 10px rgba(0 0 0 / 0.15)",
});

globalStyle(".reveal .controls", {
  color: linkColor,
});

globalStyle(".reveal .progress", {
  background: "rgba(0 0 0 / 0.2)",
  color: linkColor,
});
