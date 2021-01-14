import React from "react";

import onlineIcon from "../../assets/images/icons/onlineIcon.png";
import closeIcon from "../../assets/images/icons/closeIcon.png";

import "../../assets/css/LoginPage/InfoBar.css";

export const InfoBar = ({ room }) => (
  <div className='infoBar'>
    <div className='leftInnerContainer'>
      <img className='onlineIcon' src={onlineIcon} alt='online icon' />
      <h3>{room}</h3>
    </div>
    <div className='rightInnerContainer'>
      <a href='/'>
        <img src={closeIcon} alt='close icon' />
      </a>
    </div>
  </div>
);
