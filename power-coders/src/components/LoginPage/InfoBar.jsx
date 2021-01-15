import React from "react";

import onlineIcon from "../../assets/img/icons/onlineIcon.png";
import closeIcon from "../../assets/img/icons/closeIcon.png";

import "../../assets/css/LoginPage/InfoBar.css";

export const InfoBar = ({ room }) => (
	<div className="infoBar">
		<div className="leftInnerContainer">
			<img className="onlineIcon" src={onlineIcon} alt="online icon" />
			<h3>{room}</h3>
		</div>
		<div className="rightInnerContainer"> </div>
		<a href="/">
			<img className="closeIcon" src={closeIcon} alt="close icon" />
		</a>
	</div>
);
