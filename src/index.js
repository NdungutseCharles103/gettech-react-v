import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/";
import "./components/styles/responsive.css";
import App from "./App";
// import "@fortawesome/fontawesome-free/css/all.css";
// import { Provider } from 'react-redux';
// import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
     <App />
  </React.StrictMode>
);
