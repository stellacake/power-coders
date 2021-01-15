import { useState, useEffect, useRef } from "react";
import urlVideo from "../../../../assets/video/russian-movie.mp4";
import { Player, ControlBar, PlayToggle, playerReducer } from "video-react";
import "../../../../assets/css/SubTitles.css";
import "../../../../../node_modules/video-react/dist/video-react.css"; // import css

const SubTitles = ({ handleTVOff, modalTV }) => {
  const [answer, setAnswer] = useState({
    subtitle: "",
  });

  const definitiveAnswer1 =
    "StellaCake: Pieds qui puent le soir, fromage le matin";
  const definitiveAnswer2 = "Big Jon: Grands pieds grande...chaussures!";
  const definitiveAnswer3 =
    "Lil Jon: Femme pieds nus, femme...femme qui éternue!";
  const definitiveAnswer4 = "FloFlo: Kamoulox";

  const vidRef = useRef(null);

  const [timeLeft, setTimeLeft] = useState(5);
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

  const handleClose = () => {
    setTimeLeft(0);
    handleTVOff();
    vidRef.current.pause();
  };

  const handleSubmit = () => {
    if (timeLeft) {
      setDefinitiveAnswer(answer.subtitle);
    } else {
      handleTVOff();
    }
  };
  const [mute, setMute] = useState(true);

  const handleMute = () => {
    setMute(false);
  };

  if (timeLeft === 0 && modalTV === "on") {
    vidRef.current.play();
  }

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
      <label className="subtitle-label" htmlFor="subtitle">
        Imaginez les sous-titres!
      </label>
      <input
        className="subtitle-input"
        type="text"
        id="subtitle"
        placeholder="Votre sous-titre"
        value={subtitle}
        onChange={handleChange}
      />
      <button className="subtitle-button" type="button" onClick={handleSubmit}>
        {" "}
        {timeLeft ? "Répondre" : "Fermer"}{" "}
      </button>
      <div className={timeLeft === 0 ? "show-answer" : "hide-answer"}>
        <p className="reponses">{definitiveAnswer}</p>
        <p className="reponses">{definitiveAnswer1}</p>
        <p className="reponses">{definitiveAnswer2}</p>
        <p className="reponses">{definitiveAnswer3}</p>
        <p className="reponses">{definitiveAnswer4}</p>
      </div>
      <div className={timeLeft === 0 ? "hide-answer" : "show-answer"}>
        {definitiveAnswer ? `Merci!` : ""} {timerActive ? `${timeLeft} s` : ""}
      </div>
      <div className="close-subtitle" onClick={() => handleClose()}>
        Fermer
      </div>
    </div>
  );
};

export default SubTitles;
