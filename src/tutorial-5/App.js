import React from "react";
import "./App.css";

import EmptyBlock from "./components/EmptyBlock.jsx";
import Pharse from "./components/Phrase";
const adjectivesArr = [
  "абсолютный",
  "адский",
  "азартный",
  "активный",
  "ангельский",
  "астрономический",
  "баснословный",
  "безбожный",
  "безбрежный",
  "безвозвратный",
  "безграничный",
  "бездонный",
  "бездушный",
  "безжалостный",
  "замечательно",
  "замечательный",
  "записной",
  "запредельный",
  "заядлый",
  "звериный",
  "зверский",
  "зеленый",
  "злой",
  "злостный",
  "значительный",
  "неоспоримый",
  "неотразимый",
  "неоценимый",
  "непередаваемый",
];

const nounsArr = [
  "лгун",
  "день",
  "конь",
  "олень",
  "человек",
  "программист",
  "ребёнок",
  "конец",
  "город",
  "дурак",
];

const App = () => {
  let [arr, setArr] = React.useState([]);

  const creationPharse = () => {
    let pharese =
      adjectivesArr[Math.floor(Math.random() * 10)] + " " + nounsArr[Math.floor(Math.random() * 10)];
    setArr((prev) => [pharese, ...prev]);
  };

  const clearPhrase = () => {
    setArr([]);
  };

  return (
    <>
      <div className="wrapper">
        {arr.length !== 0 ? (
          <div className="list">
            {arr.map((text, index) => (
              <div key={index} className="block">
                <Pharse text={text} />
              </div>
            ))}
          </div>
        ) : (
          <EmptyBlock />
        )}
        <button onClick={creationPharse} className="btn btn_generate">
          Сгенерировать
        </button>
        <button onClick={clearPhrase} className="btn btn_clear">
          Очистить
        </button>
      </div>
    </>
  );
};

export default App;
