import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "@fortawesome/fontawesome-free/css/all.css";

const el = document.getElementById("root");
const root = ReactDom.createRoot(el);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
