import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap";
import "./components/styles/responsive.css";
import App from "./App";
import { Provider } from 'react-redux';
import {store, persistor} from './Redux/store'
import { PersistGate } from "redux-persist/integration/react";

// const root = ReactDOM.createRoot(document.getElementById("root"));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
