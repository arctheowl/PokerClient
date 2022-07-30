import React from "react";
import Card from "./card";

type Props = {};

const Deck = (props: Props) => {
  let deck = [];

  for (let j = 1; j < 14; j++) {
    deck.push(j + "C");
    deck.push(j + "H");
    deck.push(j + "S");
    deck.push(j + "D");
  }

  return <div className="grid grid-cols-5 ">
    {deck.map((card) => {
      return <Card card={card} key={card} />;
    })}
    </div>;
};

export default Deck;
