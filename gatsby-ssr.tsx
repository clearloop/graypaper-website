import React from "react";
import { Layout } from "./src/components/Layout";

// Adds a class name to the body element
const onRenderBody = ({ setBodyAttributes, setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/cmunbx.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="computerModernBoldFont"
    />,
    <link
      rel="preload"
      href="/fonts/cmunbi.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="computerModernBoldItalicFont"
    />,
    <link
      rel="preconnect"
      href="https://fonts.googleapis.com"
      key={"googleFontsPreconnect"}
    />,
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
      key={"gstaticPreconnect"}
    />,
    <link
      href="https://fonts.googleapis.com/css2?family=Unbounded:wght@700&display=swap"
      rel="stylesheet"
      media="screen"
      key={"unboundedFont"}
    />,
  ]);
  setBodyAttributes({
    className: "custom latex-dark",
  });
};

const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export { onRenderBody, wrapPageElement };