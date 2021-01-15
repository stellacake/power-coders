import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import queryString from "query-string";

// import Voice from "../../Interactions/Voice";

import "../../../assets/css/Rooms/Moscow.css";

import moscowRoom from "../../../assets/img/moscow-room.png";
import book from "../../../assets/img/book.png";
import window from "../../../assets/img/window.png";
import painting from "../../../assets/img/painting.png";
import mir from "../../../assets/img/mir.png";
import musicbox from "../../../assets/img/musicbox.png";
// import cocktail from "../../../assets/img/cocktail.png";
import SubTitles from "./game/SubTitles";
import phone from "../../../assets/img/phone.png";
import chapka from "../../../assets/img/chapka.png";
import tea from "../../../assets/img/tea.png";
import bottle from "../../../assets/img/bottle.png";
import metro from "../../../assets/img/metro.png";
import { moscowFacts } from "./culturalFacts";
import MagazineTest from "./MagazineTest";
import RussianDolls from "./games/RussianDolls";
import Newspaper from "./games/newspaper/Newspaper";
import WhiteRussian from "./games/whiteRussian/WhiteRussian";
import Radio from "./games/Radio/Radio";

const Moscow = ({ location }) => {
  const [modalBook, setModalBook] = useState("off");
  const [modalWindow, setModalWindow] = useState("off");
  const [modalPainting, setModalPainting] = useState("off");
  const [modalMir, setModalMir] = useState("off");
  const [modalMagazine, setModalMagazine] = useState("off");
  const [modalMusicbox, setModalMusicbox] = useState("off");
  const [modalPhone, setModalPhone] = useState("off");
  const [modalChapka, setModalChapka] = useState("off");
  const [modalTV, setModalTV] = useState("off");
  const [modalDolls, setModalDolls] = useState("off");
  const [modalNewspaper, setModalNewspaper] = useState("off");
  const [modalCocktail, setModalCocktail] = useState("off");

  const [modalTea, setModalTea] = useState("off");
  const [modalBin, setModalBin] = useState("off");
  const [modalBottle, setModalBottle] = useState("off");
  const [modalRadio, setModalRadio] = useState("off");

  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const ENDPOINT = process.env.REACT_APP_SERVER;
  let socket = useRef(null);
  useEffect(() => {
    socket.current = io(ENDPOINT);
  }, [ENDPOINT, location.search]);

  //--------------------------------------------MAGAZINE------------------------------------------
  const handleMagazineOn = () => {
    socket.current.emit("showMagazine");
  };
  const handleMagazineOff = () => {
    socket.current.emit("hideMagazine");
  };

  //--------------------------------------------TV------------------------------------------
  const handleTVOn = () => {
    socket.current.emit("showTV");
  };
  const handleTVOff = () => {
    socket.current.emit("hideTV");
  };

  //--------------------------------------------NEWSPAPER------------------------------------------
  const handleNewspaperOn = () => {
    socket.current.emit("showNewspaper");
  };
  const handleNewspaperOff = () => {
    socket.current.emit("hideNewspaper");
  };
  //--------------------------------------------COCKTAIL------------------------------------------
  const handleCocktailOn = () => {
    socket.current.emit("showCocktail");
  };
  const handleCocktailOff = () => {
    socket.current.emit("hideCocktail");
  };

  useEffect(() => {
    //-------------------Magazine--------------------
    socket.current.on("showMagazine", () => {
      setModalMagazine("on");
    });

    socket.current.on("hideMagazine", () => {
      setModalMagazine("off");
    });

    //-------------------TV--------------------
    socket.current.on("showTV", () => {
      setModalTV("on");
    });

    socket.current.on("hideTV", () => {
      setModalTV("off");
    });

    //-------------------NEWSPAPER--------------------
    socket.current.on("showNewspaper", () => {
      setModalNewspaper("on");
    });

    socket.current.on("hideNewspaper", () => {
      setModalNewspaper("off");
    });
    //-------------------COCKTAIL--------------------
    socket.current.on("showCocktail", () => {
      setModalCocktail("on");
    });

    socket.current.on("hideCocktail", () => {
      setModalCocktail("off");
    });
  });

  return (
    <div className='moscow-room'>
      <img className='hotel-room' src={moscowRoom} alt="chambre d'hôtel" />
      <div className='moscow-book'>
        <div
          className='moscow-book-area'
          onClick={() => setModalBook("on")}
        ></div>
        <div className={`fact-${modalBook}`}>
          <div className='modal-container'>
            <img className='modal-item' src={book} alt='livre Guerre et Paix' />
            <div className='modal-infos'>
              <div className='header'>Le saviez-vous&nbsp;?</div>
              <div className='modal-text'>{moscowFacts.book}</div>
              <div className='close-btn' onClick={() => setModalBook("off")}>
                Fermer
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='moscow-window'>
        <div
          className='moscow-window-area'
          onClick={() => setModalWindow("on")}
        ></div>
        <div className={`fact-${modalWindow}`}>
          <div className='modal-container'>
            <img
              className='modal-item'
              src={window}
              alt='vue sur la Place Rouge'
            />
            <div className='modal-infos'>
              <div className='header'>Le saviez-vous&nbsp;?</div>
              <div className='modal-text'>{moscowFacts.window}</div>
              <div className='close-btn' onClick={() => setModalWindow("off")}>
                Fermer
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='moscow-painting'>
        <div
          className='moscow-painting-area'
          onClick={() => setModalPainting("on")}
        ></div>
        <div className={`fact-${modalPainting}`}>
          <div className='modal-container'>
            <img
              className='modal-item'
              src={painting}
              alt='tableau de Kandinsky'
            />
            <div className='modal-infos'>
              <div className='header'>Le saviez-vous&nbsp;?</div>
              <div className='modal-text'>{moscowFacts.painting}</div>
              <div
                className='close-btn'
                onClick={() => setModalPainting("off")}
              >
                Fermer
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='moscow-mir'>
        <img
          src={mir}
          alt='station MIR'
          className='moscow-mir-area'
          onClick={() => setModalMir("on")}
        />
        <div className={`fact-${modalMir}`}>
          <div className='modal-container'>
            <img className='modal-item' src={mir} alt='station MIR' />
            <div className='modal-infos'>
              <div className='header'>Le saviez-vous&nbsp;?</div>
              <div className='modal-text'>{moscowFacts.mir}</div>
              <div className='close-btn' onClick={() => setModalMir("off")}>
                Fermer
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='moscow-musicbox'>
        <div
          className='moscow-musicbox-area'
          onClick={() => setModalMusicbox("on")}
        ></div>
        <div className={`fact-${modalMusicbox}`}>
          <div className='modal-container'>
            <img className='modal-item' src={musicbox} alt='boîte à musique' />
            <div className='modal-infos'>
              <div className='header'>Le saviez-vous&nbsp;?</div>
              <div className='modal-text'>{moscowFacts.musicbox}</div>
              <div
                className='close-btn'
                onClick={() => setModalMusicbox("off")}
              >
                Fermer
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='moscow-magazine'>
        <div
          className='moscow-magazine-area'
          onClick={() => handleMagazineOn()}
        ></div>
        <div className={`fact-${modalMagazine}`}>
          <MagazineTest handleMagazineOff={() => handleMagazineOff()} />
        </div>
      </div>
      <div className='moscow-phone'>
        <div
          className='moscow-phone-area'
          onClick={() => setModalPhone("on")}
        ></div>
        <div className={`fact-${modalPhone}`}>
          <div className='modal-container'>
            <img className='modal-item' src={phone} alt='téléphone' />
            <div className='modal-infos'>
              <div className='header'>Family time&nbsp;!</div>
              <div className='modal-text'>{moscowFacts.phone}</div>
              <div className='close-btn' onClick={() => setModalPhone("off")}>
                Fermer
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='moscow-chapka'>
        <div
          className='moscow-chapka-area'
          onClick={() => setModalChapka("on")}
        ></div>
        <div className={`fact-${modalChapka}`}>
          <div className='modal-container'>
            <img className='modal-item' src={chapka} alt='chapka' />
            <div className='modal-infos'>
              <div className='header'>Mais non&nbsp;!</div>
              <div className='modal-text'>{moscowFacts.chapka}</div>
              <div className='close-btn' onClick={() => setModalChapka("off")}>
                Fermer
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='moscow-tv'>
        <div className='moscow-tv-area' onClick={() => handleTVOn()}></div>
        <div className={`fact-${modalTV}`}>
          <div className='modal-container-game'>
            <SubTitles handleTVOff={() => handleTVOff()} modalTV={modalTV} />
          </div>
        </div>
      </div>

      <div className='moscow-dolls'>
        <div
          className='moscow-dolls-area'
          onClick={() => setModalDolls("on")}
        ></div>
        <div className={`fact-${modalDolls}`}>
          <RussianDolls handleDollsOff={() => setModalDolls("off")} />
        </div>
      </div>
      <div className='moscow-newspaper'>
        <div
          className='moscow-newspaper-area'
          onClick={() => handleNewspaperOn()}
        ></div>
        <div className={`fact-${modalNewspaper}`}>
          <div className='modal-container-game'>
            <Newspaper location={location} />
            <div className='close-btn' onClick={() => handleNewspaperOff()}>
              Fermer
            </div>
          </div>
        </div>
      </div>
      <div className='moscow-cocktail'>
        <div
          className='moscow-cocktail-area'
          onClick={() => handleCocktailOn()}
        ></div>
        <div className={`fact-${modalCocktail}`}>
          <div className='modal-container-game'>
            <WhiteRussian />
            <div className='close-btn' onClick={() => handleCocktailOff()}>
              Fermer
            </div>
          </div>
        </div>
      </div>
      <div className='radioContainer'>
        <Radio />
        <div className='moscow-tea'>
          <div
            className='moscow-tea-area'
            onClick={() => setModalTea("on")}
          ></div>
          <div className={`fact-${modalTea}`}>
            <div className='modal-container'>
              <img className='modal-item' src={tea} alt='Thé russe' />
              <div className='modal-infos'>
                <div className='header'>Le saviez-vous&nbsp;?</div>
                <div className='modal-text'>{moscowFacts.tea}</div>
                <div className='close-btn' onClick={() => setModalTea("off")}>
                  Fermer
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='moscow-bin'>
          <div
            className='moscow-bin-area'
            onClick={() => setModalBin("on")}
          ></div>
          <div className={`fact-${modalBin}`}>
            <div className='modal-container'>
              <img className='modal-item' src={metro} alt='Pass de métro' />
              <div className='modal-infos'>
                <div className='header'>Déjà&nbsp;!?</div>
                <div className='modal-text'>{moscowFacts.bin}</div>
                <div className='close-btn' onClick={() => setModalBin("off")}>
                  Fermer
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='moscow-bottle'>
          <div
            className='moscow-bottle-area'
            onClick={() => setModalBottle("on")}
          ></div>
          <div className={`fact-${modalBottle}`}>
            <div className='modal-container'>
              <img
                className='modal-item'
                src={bottle}
                alt='Bouteille de Vodka'
              />
              <div className='modal-infos'>
                <div className='header'>Hé ho&nbsp;!</div>
                <div className='modal-text'>{moscowFacts.bottle}</div>
                <div
                  className='close-btn'
                  onClick={() => setModalBottle("off")}
                >
                  Fermer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moscow;
