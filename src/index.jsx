import React from "react";
import ReactDOM from "react-dom";
import App from "./app/layout/App";
import "semantic-ui-css/semantic.min.css";
import "./app/layout/styles.css";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");

// const render = () => {
// }
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);

// if (module.hot) {
//   module.hot.accept('./App.jsx', () => {setTimeout(render)});
// }
