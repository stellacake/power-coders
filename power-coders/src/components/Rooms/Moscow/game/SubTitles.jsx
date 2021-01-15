import { useState, useEffect } from "react";
import urlVideo from "../../../../assets/video/russian-movie.mp4";
import { Player, ControlBar, PlayToggle, playerReducer } from "video-react";
import "../../../../assets/css/SubTitles.css";
import "../../../../../node_modules/video-react/dist/video-react.css"; // import css

const SubTitles = ({ handleTVOff }) => {
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

  return (
    <div className="subtitle-modal">
      <Player
        autoPlay
        muted={mute}
        src={urlVideo}
        onEnded={handleTimer}
        onPlay={handleMute}>
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
        {definitiveAnswer}
      </div>
      <div className={timeLeft === 0 ? "hide-answer" : "show-answer"}>
        {definitiveAnswer ? `Merci!` : ""} {timerActive ? `${timeLeft} s` : ""}
      </div>
    </div>
  );
};

export default SubTitles;
