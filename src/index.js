import React from "react";
import ReactDOM from "react-dom";
// import App from "./components/App/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Exchange from "./components/Exchange/Exchange";

ReactDOM.render(
  <BrowserRouter>
    <Exchange />
  </BrowserRouter>,
  document.getElementById("root")
);
