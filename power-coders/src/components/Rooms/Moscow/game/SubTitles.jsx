import { useState, useEffect, useRef } from "react";
import urlVideo from "../../../../assets/video/russian-movie.mp4";
import queryString from "query-string";
import io from "socket.io-client";
import { Player, ControlBar, PlayToggle, playerReducer } from "video-react";
import "../../../../assets/css/SubTitles.css";
import "../../../../../node_modules/video-react/dist/video-react.css"; // import css

const SubTitles = ({ handleTVOff, modalTV, location }) => {
  const [name, setName] = useState("");
  const ENDPOINT = "http://localhost:5000/";
  let socket = useRef(null);

  useEffect(() => {
    const { name } = queryString.parse(location.search);

    socket.current = io(ENDPOINT);

    setName(name);
  }, [ENDPOINT, location.search]);

  const vidRef = useRef(null);
  const [answer, setAnswer] = useState({
    subtitle: "",
  });

  const [timeLeft, setTimeLeft] = useState(20);
  const [timerActive, setTimerActive] = useState(false);

  const handleTimer = () => {
    setTimerActive(true);
  };

  useEffect(() => {
    if (timeLeft && timerActive === true) {
      const intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
    return timeLeft;
  }, [timeLeft, timerActive]);

  const [definitiveAnswer, setDefinitiveAnswer] = useState(null);

  const { subtitle } = answer;

  const handleChange = (e) => {
    const { id, value } = e.target;
    e.preventDefault();
    setAnswer({ ...answer, [id]: value });
  };

  if (timeLeft === 0 && modalTV === "on") {
    vidRef.current.play();
  }

  const handleSubmit = () => {
    socket.current.emit("setDefinitiveAnswer");
  };
  useEffect(() => {
    socket.current.on("setDefinitiveAnswer", () => {
      if (timeLeft) {
        setDefinitiveAnswer([{ ...definitiveAnswer, [name]: answer.subtitle }]);
      } else {
        handleTVOff();
      }
    });
  }, []);

  console.log(definitiveAnswer);

  const [mute, setMute] = useState(true);

  const handleMute = () => {
    setMute(false);
  };

  return (
    <div className="subtitle-modal">
      <Player
        ref={vidRef}
        autoPlay
        muted={mute}
        src={urlVideo}
        onEnded={handleTimer}
        onPlay={handleMute}
      >
        <ControlBar autoHide={false} disableDefaultControls={true}>
          <PlayToggle />
        </ControlBar>
      </Player>
      <label className="subtitle-label" for="subtitle">
        Imaginez les sous-titres!
      </label>
      <input
        className="subtitle-input"
        type="text"
        id="subtitle"
        placeholder="Votre sous-titre!"
        value={subtitle}
        onChange={handleChange}
      />
      <button className="subtitle-button" type="button" onClick={handleSubmit}>
        {" "}
        {timeLeft ? "Répondre" : "Fermer"}{" "}
      </button>
      {/* <div className={timeLeft === 0 ? "show-answer" : "hide-answer"}>
        {definitiveAnswer}
      </div>
      <div className={timeLeft === 0 ? "hide-answer" : "show-answer"}>
        {definitiveAnswer ? `Merci!` : ""} {timerActive ? `${timeLeft} s` : ""}
      </div> */}
    </div>
  );
};

export default SubTitles;
