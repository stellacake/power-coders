import React, { useState } from "react";

import { moscowFacts } from "./culturalFacts";
import MagazineTest from "./MagazineTest";
import "../../../assets/css/Rooms/Moscow.css";

const Moscow = () => {
  const [modalBook, setModalBook] = useState("off");
  const [modalWindow, setModalWindow] = useState("off");
  const [modalPainting, setModalPainting] = useState("off");
  const [modalMir, setModalMir] = useState("off");
  const [modalDancer, setModalDancer] = useState("off");
  const [modalMagazine, setModalMagazine] = useState("off");

  return (
    <div className="moscow-room">
      <div className="moscow-book">
        <img src="#" alt="Guerre et Paix" onClick={() => setModalBook("on")} />
        <div className={`fact-${modalBook}`}>
          <div className="modal-infos">
            <div className="header">Le saviez-vous ?</div>
            <div className="modal-text">{moscowFacts.book}</div>
            <div className="close-btn" onClick={() => setModalBook("off")}>
              Fermer
            </div>
          </div>
        </div>
      </div>
      <div className="moscow-window">
        <img
          src=""
          alt="Vue sur la Place Rouge"
          onClick={() => setModalWindow("on")}
        />
        <div className={`fact-${modalWindow}`}>
          <div className="modal-infos">
            <div className="header">Le saviez vous ?</div>
            <div className="modal-text">{moscowFacts.window}</div>
            <div className="close-btn" onClick={() => setModalWindow("off")}>
              Fermer
            </div>
          </div>
        </div>
      </div>
      <div className="moscow-painting">
        <img
          src=""
          alt="Tableau de Kandinsky"
          onClick={() => setModalPainting("on")}
        />
        <div className={`fact-${modalPainting}`}>
          <div className="modal-infos">
            <div className="header">Le saviez vous ?</div>
            <div className="modal-text">{moscowFacts.painting}</div>
            <div className="close-btn" onClick={() => setModalPainting("off")}>
              Fermer
            </div>
          </div>
        </div>
      </div>
      <div className="moscow-mir">
        <img src="" alt="Station Mir" onClick={() => setModalMir("on")} />
        <div className={`fact-${modalMir}`}>
          <div className="modal-infos">
            <div className="header">Le saviez vous ?</div>
            <div className="modal-text">{moscowFacts.mir}</div>
            <div className="close-btn" onClick={() => setModalMir("off")}>
              Fermer
            </div>
          </div>
        </div>
      </div>
      <div className="moscow-dancer">
        <img
          src=""
          alt="Boite à musique"
          onClick={() => setModalDancer("on")}
        />
        <div className={`fact-${modalDancer}`}>
          <div className="modal-infos">
            <div className="header">Le saviez vous ?</div>
            <div className="modal-text">{moscowFacts.dancer}</div>
            <div className="close-btn" onClick={() => setModalDancer("off")}>
              Fermer
            </div>
          </div>
        </div>
      </div>
      <div className="moscow-magazine">
        <div
          className="moscow-magazine-area"
          onClick={() => setModalMagazine("on")}></div>
        <div className={`fact-${modalMagazine}`}>
          <div className="modal-container">
            <img className="modal-item" src="" alt="livre Guerre et Paix" />
            <div className="modal-infos">
              <div className="header">Qui est le plus Russé?</div>
              <div className="modal-text">
                <MagazineTest setModalMagazine={setModalMagazine} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moscow;
