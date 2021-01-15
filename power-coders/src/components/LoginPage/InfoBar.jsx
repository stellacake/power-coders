import React from "react";

import onlineIcon from "../../assets/img/icons/onlineIcon.png";

import "../../assets/css/LoginPage/InfoBar.css";

export const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </div>
  </div>
);
