import React from "react";

import "font-awesome/css/font-awesome.min.css";

import "../../assets/css/LoginPage/Input.css";

export const Input = ({ message, setMessage, sendMessage }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Aa"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
    />
    <button className="sendButton" onClick={(e) => sendMessage(e)}>
      <div>
        <i className="fa fa-paper-plane" />
      </div>
    </button>
  </form>
);
