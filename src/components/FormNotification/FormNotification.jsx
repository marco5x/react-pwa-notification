import React, { useState } from "react";
import axios from "axios";

export const FormNotification = () => {
  const [message, setMessage] = useState({ title: "", message: "" });
  const handleMesssage = (e) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://notification-web-server.onrender.com/message", message)
      .then((resp) => console.log(resp))
      .catch((e) => console.log(e));
    setMessage({ title: "", message: "" });
  };

  return (
    <div
      style={{
        dysplay: "flex",
        border: "none",
        padding: 10,
        width: "18rem",
        borderRadius: "5px",
        boxShadow: "1px 1px 13px 3px #ccc",
      }}
    >
      <h3 style={{ dysplay: "flex" }}>Mensaje al servidor!!</h3>
      <form onSubmit={handleSubmit}>
        <label>Titulo: </label>
        <input
          type="text"
          name="title"
          onChange={handleMesssage}
          value={message.title}
        />
        <br />
        <label>Mensaje: </label>
        <br />
        <textarea
          type="text"
          name="message"
          onChange={handleMesssage}
          value={message.message}
        />
        <br />
        <button
          style={{
            borderRadius: "6px",
            padding: "6px",
            border: "none",
            backgroundColor: "powderblue",
            cursor: "pointer",
          }}
          type="submit"
        >
          <strong>ENVIAR</strong>
        </button>
        <br />
      </form>
    </div>
  );
};
