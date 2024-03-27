import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import reportWebVitals from "./reportWebVitals";
import WebRouter from "./router/router";
import { LoadingProvider } from "./contexts/loadingContext";
// import Home from "./screens/home";
// import about from "./screens/about";
// import Contact from "./screens/contact";

// import { BrowserRouter as Routes, Route } from "react-router-dom";
// import about from './about'; // assuming about component is in the same directory

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoadingProvider>
      <WebRouter />
    </LoadingProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
