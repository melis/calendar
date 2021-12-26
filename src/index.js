import React from "react";
import ReactDOM from "react-dom";
// import App from "./components/App/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import Exchange from "./components/Exchange/Exchange";
import Cansel from "./components/Cansel/Cansel";

ReactDOM.render(
  <BrowserRouter>
    <Cansel />
  </BrowserRouter>,
  document.getElementById("root")
);
