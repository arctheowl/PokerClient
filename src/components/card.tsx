import Image from "next/image";
import React from "react";
import { CardImages } from "../images/cardImages";
import Draggable from "react-draggable";

type Props = {
  card: string;
  value?: number;
  suit?: string;
};

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

const Card = ({ card }: Props) => {
  //@ts-ignore
  const cardImage = CardImages[card];

  //@ts-ignore
  const cardBack = CardImages["Back2"];
  const [isOpen, setIsOpen] = React.useState(false);
  const [isFlipped, setIsFlipped] = React.useState(true);
  const [isBackFlipped, setIisBackFlipped] = React.useState(false);

  const imgStyle = {
    // "userDrag": "none",
    // "user-select": "none",
    "-moz-user-select": "none",
    "-webkit-user-drag": "none",
    "-webkit-user-select": "none",
    "-ms-user-select": "none",
  };

  const handleClick = (e: string) => {
    if (e === "Back") {
      setIsFlipped(!isFlipped);
      setIisBackFlipped(!isBackFlipped);
      setTimeout(function () {
        setIsOpen(!isOpen);
      }, 300);
    } else if (e === "Front") {
      setIisBackFlipped(!isBackFlipped);
      setIsFlipped(!isFlipped);
      setTimeout(function () {
        setIsOpen(!isOpen);
      }, 300);
    }
  };

  return (
    <Draggable>
      <div className={`hover:scale-125 hover:z-50 absolute bottom-1/2 md:left-96`}>
        {isOpen ? (
          <button
            onClick={() => {
              handleClick("Front");
            }}
          >
            <div
              className={`animate-flip-in  ${
                isFlipped ? "animate-flip-out" : ""
              }`}
            >
              <Image
                src={cardImage}
                width={100}
                height={150}
                alt={card}
                //@ts-ignore
                style={imgStyle}
              />
            </div>
          </button>
        ) : (
          <button
            onClick={() => {
              handleClick("Back");
            }}
          >
            <div
              className={`animate-flip-in ${
                isBackFlipped ? "animate-flip-out" : ""
              }`}
            >
              <Image
                src={cardBack}
                width={100}
                height={150}
                alt={card}
                //@ts-ignore
                style={imgStyle}
              />
            </div>
          </button>
        )}
      </div>
    </Draggable>
  );
};

export default Card;
