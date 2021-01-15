import React, { useEffect, useState } from "react";
import "../../../assets/css/Rooms/Moscow.css";
import magazine from "../../../assets/img/magazine.png";

const MagazineTest = ({ handleMagazineOff }) => {
  const players = [
    {
      id: "playerOne",
      value: "Big Jon",
    },
    {
      id: "playerTwo",
      value: "Lil Jon",
    },
    {
      id: "playerThree",
      value: "FloFlo",
    },
    {
      id: "playerFour",
      value: "Fanouchka",
    },
    {
      id: "playerFive",
      value: "StellaCake",
    },
  ];

  const [step, setStep] = useState(0);
  const [winner, setWinner] = useState("");
  const [currentValue, setCurrentValue] = useState("");
  const [values, setValues] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
  });

  const handleChange = (e) => {
    setCurrentValue(e.target.value);
  };

  const handleSubmit = (e) => {};

  const handleClick = () => {
    if (step === 0) {
      setStep(step + 1);
    } else if (step < 7) {
      setValues({ ...values, [step]: currentValue });
      setStep(step + 1);
      setCurrentValue("");
    } else {
      handleMagazineOff();
      setStep(0);
      setCurrentValue("");
    }
  };

  useEffect(() => {
    if (step === 7) {
      const finalScore = Object.values(values).reduce(
        (acc, value) => {
          acc[value] = acc[value] + 1;

          return acc;
        },
        {
          playerOne: 0,
          playerTwo: 0,
          playerThree: 0,
          playerFour: 0,
          playerFive: 0,
        }
      );

      const higherScore = Object.values(finalScore).sort((a, b) => b - a)[0];

      setWinner(
        players.find((player) => finalScore[player.id] === higherScore).value
      );
    }
  }, [step]);

  const russianTest = [
    {
      question: "Qui est le plus Russé ? ",
      text:
        "Un verre de vodka dans une main, une faucille dans l'autre, qui s'adapaterait le mieux à la vie Moscovite? ",
      picture: magazine,
      button: "C'est parti !",
    },

    {
      question:
        "Qui serait le meilleur successeur à la tête de la Russie après Poutine ?",
      text: "",
      picture:
        "https://lh3.googleusercontent.com/QJlkBnGplDIpj8UQ0kgXodw9mzx2IBu-v6YlEObcXEcTDum-4Xlaxt9HKMBfYYjpyFti3gDVD15_h2aTxqI5RbivuaZeLwQCPFvf-DAOeCzIlPPjtfQMEHlSwmU1MpOVJhVkaQVKz2bgV-Uc",
      button: "Suivant",
    },

    {
      question:
        "Lequel d'entre vous pourrait rivaliser avec les Russes à un jeu d'alcool ?",
      text: "",
      picture:
        "https://www.challenges.fr/assets/img/2014/08/26/images_list-r4x3w1000-579634546780f-russie-vodka-chapka-bar.jpg",
      button: "Suivant",
    },

    {
      question:
        "Qui est prêt à tout partager (femme compris) avec les autres ?",
      text: "",
      picture:
        "https://imrussia.org/images/stories/Society/Imperial_National_Communism/marksism-leninism.jpg",
      button: "Suivant",
    },
    {
      question:
        "Qui serait prêt à manger du kholodets ? (plat de viande en gelée) ? ",
      text: "",
      picture:
        "http://russia-travel-guide.com/cuisine/images/russia-cuisine-kholodets-1.jpg",
      button: "Suivant",
    },
    {
      question:
        "Qui chante assez bien pour rejoindre le choeur de l'armée rouge ?",
      text: "",
      picture:
        "https://lh4.googleusercontent.com/EvihBhwVFkxnMI9s5PxYN27n9GYwqVKsW3ejPljNrSHnrLCf8smh6MApibG6shb9UCdlCLTAx4ogvCwkPPUy6M1LG-2Auuli_obKT-AnCuk2Tsxkwh1UkuQdaL7tPg=w720",
      button: "Suivant",
    },

    {
      question: "Qui pourrait défier un Russe aux échecs?",
      text: "",
      picture: "https://pbs.twimg.com/media/D5Y68WEXkAAFRp3.jpg",
      button: "Voir les résultats",
    },
    {
      question: `Bravo ${winner}, tes camarades t'ont désigné le plus russé d'entre vous! Poutine valide ! `,
      text: "",
      picture: "https://media.giphy.com/media/P0RWkdsRpK7ss/giphy.gif",
      button: "Fermer",
    },
  ];

  const testStep = russianTest[step];
  return (
    <div className="modal-container">
      <img
        className="modal-item-mag"
        src={testStep.picture}
        alt="magazine cosmo Russe"
      />
      <div className="modal-infos">
        <div className="header">{testStep.question}</div>
        <div className="modal-text">{testStep.text}</div>
        <form className={step === 0 || step === 7 ? "form-off" : "form-on"}>
          {players.map((player) => (
            <>
              <input
                type="radio"
                id={player.id}
                name={`step-${step}`}
                value={player.id}
                checked={currentValue === player.id}
                onChange={handleChange}
              />
              <label htmlFor={player.id}>{player.value}</label>
            </>
          ))}
        </form>
        <button
          disabled={step !== 0 && step !== 7 && currentValue.length === 0}
          className="close-btn"
          onSubmit={() => handleSubmit}
          onClick={() => handleClick()}>
          {testStep.button}
        </button>
      </div>
    </div>
  );
};

export default MagazineTest;
