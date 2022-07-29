import Image from "next/image";
import React from "react";
import { CardImages } from "../images/cardImages";
import Draggable from "react-draggable";
import { CardBacks } from "../images/cardBacks";

type Props = {
  card: string;
  value?: number;
  suit?: string;
};

const Card = ({ card }: Props) => {
  //@ts-ignore
  const cardImage = CardImages[card];

  //@ts-ignore
  const cardBack = CardImages["Back2"];
  const [isOpen, setIsOpen] = React.useState(true);
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [isBackFlipped, setIisBackFlipped] = React.useState(true);

  const handleClick = (e: string) => {
    if (e === "Back") {
      setIsFlipped(!isFlipped);
      setIisBackFlipped(!isBackFlipped);
      setTimeout(function () {
        setIsOpen(!isOpen);
      }, 500);
    } else if (e === "Front") {
      setIisBackFlipped(!isBackFlipped);
      setIsFlipped(!isFlipped);
      setTimeout(function () {
        setIsOpen(!isOpen);
      }, 500);
    }
  };

  return (
    <Draggable>
      <div className="hover:scale-125">
        {isOpen ? (
          <button
            onClick={() => {
              handleClick("Front");
            }}
          >
            <div
              className={`animate-flip-in ${
                isFlipped ? "animate-flip-out" : ""
              }`}
            >
              <Image src={cardImage} width={100} height={150} alt={card} />
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
              <Image src={cardBack} width={100} height={150} alt={card} />
            </div>
          </button>
        )}
      </div>
    </Draggable>
  );
};

export default Card;
