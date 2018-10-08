import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

window.onload = () => {
  ReactDOM.hydrate(<App />, document.getElementById("app"));
};
