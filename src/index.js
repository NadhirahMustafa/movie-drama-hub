import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import App from "./App";
import "./App.scss";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </StrictMode>
);

reportWebVitals();