import React from "react";
import Moscow from "./Rooms/Moscow/Moscow";
import Chat from "./LoginPage/Chat";

const Room = ({ location }) => {
  return (
    <div>
      <Moscow />
      <Chat location={location} />
    </div>
  );
};

export default Room;
