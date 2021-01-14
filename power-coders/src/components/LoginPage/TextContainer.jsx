import React from "react";

import onlineIcon from "../../assets/images/icons/onlineIcon.png";

import "../../assets/css/LoginPage/TextContainer.css";

export const TextContainer = ({ users }) => (
  <div className='textContainer'>
    {users ? (
      <div className='activeContainer'>
        <h5 className='activeContainer-title'>
          {users.map(({ name }) => (
            <div key={name} className='activeItem'>
              {name}
              <img alt='Online Icon' src={onlineIcon} />
            </div>
          ))}
        </h5>
      </div>
    ) : null}
  </div>
);
