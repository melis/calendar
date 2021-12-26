import React from "react";
import ReactDOM from "react-dom";
// import App from "./components/App/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import Exchange from "./components/Exchange/Exchange";
// import Cansel from "./components/Cansel/Cansel";
import Return from "./components/Return/Return";

ReactDOM.render(
  <BrowserRouter>
    <Return />
  </BrowserRouter>,
  document.getElementById("root")
);
