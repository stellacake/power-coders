import React, { useMemo, useState } from "react";

import { newspaperArray } from "./newspaperConstants";

import "../../../../assets/css/newspaper.css";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};

const Newspaper = () => {
  const [wordsClicked, setWordsClicked] = useState([]);

  const handleClick = (name) => {
    setWordsClicked([...wordsClicked, name]);
  };

  const getCorrectClassName = (name, value) => {
    if (wordsClicked.includes(name)) {
      if (value) {
        return `newspaper__word--good`;
      } else {
        return `newspaper__word--wrong`;
      }
    }
  };

  const newspaperArrayShuffled = useMemo(() => shuffleArray(newspaperArray), [
    newspaperArray,
  ]);

  return (
    <div className="newspaper__wrapper">
      <h2 className="newspaper__title">Liste de mots</h2>
      <p className="newspaper__paragraph">
        D'après vous, quels sont les mots russes que vous utilisez sans le
        savoir ?
      </p>
      <div className="newspaper__list">
        {newspaperArrayShuffled.map((item) => {
          return (
            <div
              onClick={() => handleClick(item.name)}
              key={item.name}
              className={`newspaper__word ${getCorrectClassName(
                item.name,
                item.value
              )}`}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Newspaper;
