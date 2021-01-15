import React, { useMemo, useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import { newspaperArray } from "./newspaperConstants";

import "../../../../../assets/css/Rooms/newspaper.css";

const ENDPOINT = "http://localhost:5000/";

//--------------------------------------------SOCKET------------------------------------------

// const shuffleArray = (array) => {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * i);
//     const temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }

//   return array;
// };

function Newspaper({ location }) {
  const [bistro, setBistro] = useState("");
  const [blini, setBlini] = useState("");
  const [moleskine, setMoleskine] = useState("");
  const [steppe, setSteppe] = useState("");
  const [hourra, setHourra] = useState("");
  const [houligan, setHouligan] = useState("");
  const [robot, setRobot] = useState("");
  const [feria, setFeria] = useState("");
  const [karma, setKarma] = useState("");
  const [slalom, setSlalom] = useState("");

  let socket = useRef(null);
  useEffect(() => {
    socket.current = io(ENDPOINT);
  }, [ENDPOINT, location.search]);

  const handleBistro = () => {
    socket.current.emit("clickBistro");
  };
  const handleBlini = () => {
    socket.current.emit("clickBlini");
  };
  const handleHourra = () => {
    socket.current.emit("clickHourra");
  };
  const handleHouligan = () => {
    socket.current.emit("clickHouligan");
  };
  const handleSteppe = () => {
    socket.current.emit("clickSteppe");
  };
  const handleRobot = () => {
    socket.current.emit("clickRobot");
  };
  const handleFeria = () => {
    socket.current.emit("clickFeria");
  };
  const handleKarma = () => {
    socket.current.emit("clickKarma");
  };
  const handleSlalom = () => {
    socket.current.emit("clickSlalom");
  };
  const handleMoleskine = () => {
    socket.current.emit("clickMoleskine");
  };

  useEffect(() => {
    socket.current.on("clickBistro", () => {
      setBistro("bistro");
    });
    socket.current.on("clickMoleskine", () => {
      setMoleskine("moleskine");
    });
    socket.current.on("clickRobot", () => {
      setRobot("robot");
    });
    socket.current.on("clickSlalom", () => {
      setSlalom("slalom");
    });
    socket.current.on("clickKarma", () => {
      setKarma("karma");
    });
    socket.current.on("clickHourra", () => {
      setHourra("hourra");
    });
    socket.current.on("clickHouligan", () => {
      setHouligan("houligan");
    });
    socket.current.on("clickSteppe", () => {
      setSteppe("steppe");
    });
    socket.current.on("clickFeria", () => {
      setFeria("feria");
    });
    socket.current.on("clickBlini", () => {
      setBlini("blini");
    });
  });

  return (
    <div className="newspaper__wrapper">
      <h2 className="newspaper__title">Liste de mots</h2>
      <p className="newspaper__paragraph">
        D'après vous, quels sont les mots russes que vous utilisez sans le
        savoir&nbsp;?
      </p>
      <div className="newspaper__list">
        {/* {newspaperArrayShuffled.map((item) => {
          return (
            <div
              onClick={() => handleNewspaper()}
              key={item.name}
              className={`newspaper__word ${getCorrectClassName(
                item.name,
                item.value
              )}`}>
              {item.name}
            </div>
          );
        })} */}
        <div className={`word-${bistro}`} onClick={() => handleBistro()}>
          Bistrot
        </div>
        <div className={`word-${robot}`} onClick={() => handleRobot()}>
          Robot
        </div>
        <div className={`word-${moleskine}`} onClick={() => handleMoleskine()}>
          Moleskine
        </div>
        <div className={`word-${blini}`} onClick={() => handleBlini()}>
          Blini
        </div>
        <div className={`word-${slalom}`} onClick={() => handleSlalom()}>
          Slalom
        </div>
        <div className={`word-${steppe}`} onClick={() => handleSteppe()}>
          Steppe
        </div>
        <div className={`word-${karma}`} onClick={() => handleKarma()}>
          Karma
        </div>
        <div className={`word-${hourra}`} onClick={() => handleHourra()}>
          Hourra
        </div>
        <div className={`word-${houligan}`} onClick={() => handleHouligan()}>
          Houligan
        </div>
        <div className={`word-${feria}`} onClick={() => handleFeria()}>
          Féria
        </div>
      </div>
    </div>
  );
}

export default Newspaper;
