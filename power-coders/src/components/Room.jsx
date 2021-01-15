import React from "react";
import Moscow from "./Rooms/Moscow/Moscow";
import Chat from "./LoginPage/Chat";

const Room = ({ location }) => {
  return (
    <div>
      <Moscow location={location} />
      <Chat location={location} />
    </div>
  );
};

export default Room;
