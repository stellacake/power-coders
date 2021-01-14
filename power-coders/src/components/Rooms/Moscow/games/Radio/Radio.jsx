import React, { useMemo, useState } from "react";

import { radioArray } from "./radioConstants";

import "../../../../../assets/css/Rooms/radio.css";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};

const Radio = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked === false) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  };

  const radioArrayShuffled = useMemo(() => shuffleArray(radioArray), []);

  return (
    <div>
      <div
        className="radio__wrapper"
        onClick={() => handleClick(shuffleArray(radioArray))}
      ></div>
      <div>
        {isClicked === true ? (
          <figure className="radio__figure">
            <figcaption className="radio__title">
              {radioArrayShuffled[0].title}
            </figcaption>
            <audio
              className="radio__audio"
              controls
              src={radioArrayShuffled && radioArrayShuffled[0].url}
            />
            {console.log(radioArrayShuffled[0].url)}
          </figure>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Radio;
