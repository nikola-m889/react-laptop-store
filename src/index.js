import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalContext } from "./context/context";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <GlobalContext>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </GlobalContext>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
