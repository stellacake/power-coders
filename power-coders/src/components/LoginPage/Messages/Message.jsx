import React from "react";

import ReactEmoji from "react-emoji";

import "../../../assets/css/LoginPage/Message.css";

export const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <div className="sentText pr-10">{trimmedName}</div>
      <div className="messageBox backgroundBlue">
        <div className="messageText colorWhite">{ReactEmoji.emojify(text)}</div>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <div className="messageText colorDark">{text}</div>
      </div>
      <div className="sentText pl-10">{user}</div>
    </div>
  );
};
