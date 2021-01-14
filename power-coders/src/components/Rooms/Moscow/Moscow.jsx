import React, { useState } from "react";

import { moscowFacts } from "./culturalFacts";
import MagazineTest from "./MagazineTest";
import "../../../assets/css/Rooms/Moscow.css";
import moscowRoom from "../../../assets/img/moscow-room.png";
import book from "../../../assets/img/book.png";

// import book from "../../../assets/img/book.png";
// import cocktail from "../../../assets/img/cocktail.png";

const Moscow = () => {
  const [modalBook, setModalBook] = useState("off");
  const [modalWindow, setModalWindow] = useState("off");
  const [modalPainting, setModalPainting] = useState("off");
  const [modalMir, setModalMir] = useState("off");
  const [modalMagazine, setModalMagazine] = useState("off");
  const [modalMusicbox, setModalMusicbox] = useState("off");
  return (
    <div className="moscow-room">
      <img className="hotel-room" src={moscowRoom} alt="chambre d'hôtel" />
      <div className="moscow-book">
        <div
          className="moscow-book-area"
          onClick={() => setModalBook("on")}></div>
        <div className={`fact-${modalBook}`}>
          <div className="modal-container">
            <img className="modal-item" src={book} alt="livre Guerre et Paix" />
            <div className="modal-infos">
              <div className="header">Le saviez-vous ?</div>
              <div className="modal-text">{moscowFacts.book}</div>
              <div className="close-btn" onClick={() => setModalBook("off")}>
                Fermer
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="moscow-window">
        <div
          className="moscow-window-area"
          onClick={() => setModalWindow("on")}></div>
        <div className={`fact-${modalWindow}`}>
          <div className="modal-container">
            <img className="modal-item" src="" alt="vue sur la Place Rouge" />
            <div className="modal-infos">
              <div className="header">Le saviez-vous ?</div>
              <div className="modal-text">{moscowFacts.window}</div>
              <div className="close-btn" onClick={() => setModalWindow("off")}>
                Fermer
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="moscow-painting">
        <div
          className="moscow-painting-area"
          onClick={() => setModalPainting("on")}></div>
        <div className={`fact-${modalPainting}`}>
          <div className="modal-container">
            <img className="modal-item" src="" alt="tableau de Kandinsky" />
            <div className="modal-infos">
              <div className="header">Le saviez-vous ?</div>
              <div className="modal-text">{moscowFacts.painting}</div>
              <div
                className="close-btn"
                onClick={() => setModalPainting("off")}>
                Fermer
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="moscow-mir">
        <div
          className="moscow-mir-area"
          onClick={() => setModalMir("on")}></div>
        <div className={`fact-${modalMir}`}>
          <div className="modal-container">
            <img className="modal-item" src="" alt="station MIR" />
            <div className="modal-infos">
              <div className="header">Le saviez-vous ?</div>
              <div className="modal-text">{moscowFacts.mir}</div>
              <div className="close-btn" onClick={() => setModalMir("off")}>
                Fermer
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="moscow-musicbox">
        <div
          className="moscow-musicbox-area"
          onClick={() => setModalMusicbox("on")}></div>
        <div className={`fact-${modalMusicbox}`}>
          <div className="modal-container">
            <img className="modal-item" src="" alt="boîte à musique" />
            <div className="modal-infos">
              <div className="header">Le saviez-vous ?</div>
              <div className="modal-text">{moscowFacts.Musicbox}</div>
              <div
                className="close-btn"
                onClick={() => setModalMusicbox("off")}>
                Fermer
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="moscow-magazine">
        <div
          className="moscow-magazine-area"
          onClick={() => setModalMagazine("on")}></div>
        <div className={`fact-${modalMagazine}`}>
          <MagazineTest setModalMagazine={setModalMagazine} />
        </div>
      </div>
      <div className="moscow-phone">
        <div className="moscow-phone-area"></div>
      </div>
      <div className="moscow-tv">
        <div className="moscow-tv-area"></div>
      </div>
      <div className="moscow-dolls">
        <div className="moscow-dolls-area"></div>
      </div>
      <div className="moscow-cocktail">
        <div className="moscow-cocktail-area"></div>
      </div>
    </div>
  );
};

export default Moscow;
