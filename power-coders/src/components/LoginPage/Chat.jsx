import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import { InfoBar } from "./InfoBar";
import { Input } from "./Input";
import { Messages } from "./Messages/Messages";
import { TextContainer } from "./TextContainer";
import "../../assets/css/LoginPage/Chat.css";

let socket = "";

console.log(process.env);
const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = process.env.REACT_APP_SERVER;

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((msgs) => [...msgs, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className='outerContainer'>
      <div className='container'>
        <InfoBar room={room} />
        <TextContainer users={users} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
