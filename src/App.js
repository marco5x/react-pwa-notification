import React from "react";
import "./App.css";
import { FormNotification } from "./components/FormNotification/FormNotification";
import UpdaterVersion from "./components/sw/UpdaterVersion";

const App = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <UpdaterVersion />
      <h2> MANAGER NOTIFICATION 👨🏻‍💻 </h2>
      <br />
      <FormNotification />
    </div>
  );
};

export default App;
