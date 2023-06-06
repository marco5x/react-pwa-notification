import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { onServiceWorkerUpdate } from "@3m1/service-worker-updater";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

serviceWorkerRegistration.register({
  onUpdate: (registration) => {
    // Your code goes here
    // ...
    // Then, call this callback:
    onServiceWorkerUpdate(registration);
  },
});

reportWebVitals();
