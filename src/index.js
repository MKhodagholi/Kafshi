import React from "react";
import ReactDOM from "react-dom";
// import './bootstrap/dist/css/bootstrap.rtl.min.css'
import "./index.css";
import App from "./App";

import { ThemeProvider } from "./context/ThemeProvider";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
