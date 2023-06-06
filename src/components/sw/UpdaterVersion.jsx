import React from "react";
import { withServiceWorkerUpdater } from "@3m1/service-worker-updater";

const UpdaterVersion = (props) => {
  const { newServiceWorkerDetected, onLoadNewServiceWorkerAccept } = props;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {newServiceWorkerDetected ? (
        <div
          style={{
            marginTop: "1rem",
            backgroundColor: "crimson",
            marginBottom: 20,
            padding: 20,
            width: "30rem",
            borderRadius: "12px",
          }}
        >
          {/* Aqui los comentarios sobre la nueva actualización*/}
          <h2>¡Nueva actualización! ¿Quieres actualizar?</h2>
          <button
            onClick={onLoadNewServiceWorkerAccept}
            style={{
              color: "mediumturquoise",
              borderRadius: "5px",
              border: "none",
              padding: 12,
              backgroundColor: "black",
            }}
          >
            <strong>¡Actualizar!</strong>
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default withServiceWorkerUpdater(UpdaterVersion);
