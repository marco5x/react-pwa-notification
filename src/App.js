import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div className="App">HelloWorld!!</div>} />
    </Routes>
  );
};
