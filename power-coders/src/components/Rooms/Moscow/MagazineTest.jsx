import React, { useState } from "react";

import "../../../assets/css/Rooms/MagazineTest.css";
const MagazineTest = ({ setModalMagazine }) => {
  const [step, setStep] = useState(0);
  const handleClick = () => {
    if (step < 7) {
      setStep(step + 1);
    } else {
      setModalMagazine("off");
      setStep(0);
    }
  };
  const russianTest = [
    {
      question:
        "Un verre de vodka dans une main, une faucille dans l'autre, qui s'adapaterait le mieux à la vie Moscovite? ",
      picture:
        "https://cdni.rt.com/files/2018.06/article/5b23a5d6fc7e93e7288b4591.jpg",
      button: "C'est parti !",
    },

    {
      question:
        "Qui serait le meilleur successeur à la tête de la Russie après Poutine ?",
      picture:
        "https://lh3.googleusercontent.com/QJlkBnGplDIpj8UQ0kgXodw9mzx2IBu-v6YlEObcXEcTDum-4Xlaxt9HKMBfYYjpyFti3gDVD15_h2aTxqI5RbivuaZeLwQCPFvf-DAOeCzIlPPjtfQMEHlSwmU1MpOVJhVkaQVKz2bgV-Uc",
      button: "Suivant",
    },

    {
      question:
        "Lequel d'entre vous pourrait rivaliser avec les Russes à un jeu d'alcool ?",
      picture:
        "https://www.challenges.fr/assets/img/2014/08/26/images_list-r4x3w1000-579634546780f-russie-vodka-chapka-bar.jpg",
      button: "Suivant",
    },

    {
      question:
        "Qui est prêt à tout partager (femme compris) avec les autres ?",
      picture:
        "https://imrussia.org/images/stories/Society/Imperial_National_Communism/marksism-leninism.jpg",
      button: "Suivant",
    },
    {
      question:
        "Qui serait prêt à manger du kholodets ? (plat de viande en gelée) ? ",
      picture:
        "http://russia-travel-guide.com/cuisine/images/russia-cuisine-kholodets-1.jpg",
      button: "Suivant",
    },
    {
      question:
        "Qui chante assez bien pour rejoindre le choeur de l'armée rouge ?",
      picture:
        "https://lh4.googleusercontent.com/EvihBhwVFkxnMI9s5PxYN27n9GYwqVKsW3ejPljNrSHnrLCf8smh6MApibG6shb9UCdlCLTAx4ogvCwkPPUy6M1LG-2Auuli_obKT-AnCuk2Tsxkwh1UkuQdaL7tPg=w720",
      button: "Suivant",
    },

    {
      question: "Qui pourrait défier un Russe aux échecs?",
      picture: "https://pbs.twimg.com/media/D5Y68WEXkAAFRp3.jpg",
      button: "Voir les résultats",
    },
    {
      question:
        "Bravo tes camarades t'ont désigné le plus russé d'entre vous! Poutine valide ! ",
      picture: "https://media.giphy.com/media/P0RWkdsRpK7ss/giphy.gif",
      button: "Fermer",
    },
  ];
  const testStep = russianTest[step];
  return (
    <div className="testmag">
      <div>{testStep.question}</div>
      <img src={testStep.picture} className="quiz-picture" />
      <button onClick={() => handleClick()}>{testStep.button}</button>
    </div>
  );
};

export default MagazineTest;
