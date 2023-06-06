import React from "react";
import "./App.css";
import { withServiceWorkerUpdater } from "@3m1/service-worker-updater";
import { FormNotification } from "./components/FormNotification/FormNotification";

const App = (props) => {
  const { newServiceWorkerDetected, onLoadNewServiceWorkerAccept } = props;
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {newServiceWorkerDetected === true ? (
        <div
          style={{ backgroundColor: "tomato", marginBottom: 20, padding: 20 }}
        >
          <h2>¡Nueva actualización! ¿Quieres actualizar?</h2>
          <button
            onClick={onLoadNewServiceWorkerAccept}
            style={{ padding: 15 }}
          >
            ¡Actualizar!
          </button>
        </div>
      ) : null}
      <h2> MANAGER NOTIFICATION 👨🏻‍💻 </h2>
      <br />
      <FormNotification />
    </div>
  );
};

export default withServiceWorkerUpdater(App);
