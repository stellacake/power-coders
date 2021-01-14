import React, { useMemo, useState } from "react";

import { whiteRussianArray } from "./whiteRussianConstants";

import "../../../../../assets/css/Rooms/whiteRussian.css";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};

function WhiteRussian() {
  const [wordsClicked, setWordsClicked] = useState([]);

  const handleClick = (name, value) => {
    setWordsClicked([...wordsClicked, { name, value }]);
  };

  const getCorrectClassName = (name, value) => {
    if (wordsClicked.map((item) => item.name).includes(name)) {
      if (value) {
        return `whiteRussian__word--good`;
      } else {
        return `whiteRussian__word--wrong`;
      }
    }
  };

  const whiteRussianArrayShuffled = useMemo(
    () => shuffleArray(whiteRussianArray),
    [whiteRussianArray]
  );

  const numberOfIngredients = useMemo(
    () => whiteRussianArray.filter((item) => item.value === true).length,
    [whiteRussianArray]
  );

  const numberOfIngredientsFound = useMemo(
    () => wordsClicked.filter((item) => item.value === true).length,
    [wordsClicked]
  );

  return (
    <div className="whiteRussian__wrapper">
      <h2>Le White Russian</h2>
      <p className="whiteRussian__paragraph">
        Connaissez-vous la recette de ce cocktail ?
      </p>
      <div className="whiteRussian__wrapper__glass">
        <div className="whiteRussian__glass">
          <div
            className="whiteRussian__drink"
            style={{ top: `${100 - numberOfIngredientsFound * 20}%` }}
          ></div>
        </div>
        <div className="whiteRussian__list">
          {whiteRussianArrayShuffled.map((item) => {
            return (
              <div
                onClick={() => handleClick(item.name, item.value)}
                key={item.name}
                className={`whiteRussian__word ${getCorrectClassName(
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
    </div>
  );
}

export default WhiteRussian;
