import React, { useState } from "react";
import alldolls from "../../../../assets/img/fivedolls.png";
import onedoll from "../../../../assets/img/onedoll.png";
import twodolls from "../../../../assets/img/twodolls.png";
import threedolls from "../../../../assets/img/threedolls.png";
import fourdolls from "../../../../assets/img/fourdolls.png";

const RussianDolls = ({ setModalDolls }) => {
  const [dollNumber, setDollNumber] = useState(0);
  const matriochka = [
    { picture: onedoll },
    { picture: twodolls },
    { picture: threedolls },
    { picture: fourdolls },
    { picture: alldolls },
    { picture: "https://media.giphy.com/media/3o6ZsXrkJEdqzUWfD2/giphy.gif" },
  ];
  const russianDoll = matriochka[dollNumber];
  const handleClick = () => {
    if (dollNumber < 5) {
      setDollNumber(dollNumber + 1);
    } else {
      setModalDolls("off");
      setDollNumber(0);
    }
  };

  return (
    <div className="modal-container-game" onClick={() => handleClick()}>
      <img src={russianDoll.picture} className="russian-doll" />
      <div className="close-btn" onClick={() => setModalDolls("off")}>
        Fermer
      </div>
    </div>
  );
};

export default RussianDolls;
