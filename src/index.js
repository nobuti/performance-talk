/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";

import reportWebVitals from "report/reportWebVitals";
import App from "App";

import "@jobandtalent/design-system/dist/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// eslint-disable-next-line no-console
reportWebVitals(console.log);
