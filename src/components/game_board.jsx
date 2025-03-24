import { useState, useEffect } from "react";
import Card from "./card";

const randomCards = (cards) => {
  let random = [...cards];
  for (let i = random.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [random[i], random[j]] = [random[j], random[i]];
  }
  return random;
};

export default function GameBoard({
  onWin,
  handleCardCount,
  startMusic,
  startTimer,
}) {
  const startingCards = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
  const [cards, setCards] = useState(randomCards(startingCards));
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    if (flippedIndices.length === 2) {
      const [firstCardValue, secondCardValue] = flippedIndices;
      if (cards[firstCardValue] === cards[secondCardValue]) {
        setMatchedCards((prev) => [...prev, cards[firstCardValue]]);
        handleCardCount();
      }
      setTimeout(() => setFlippedIndices([]), 1000);
    }
  }, [flippedIndices, cards]);

  useEffect(() => {
    if (matchedCards.length === startingCards.length / 2) {
      setTimeout(() => onWin(), 500);
    }
  }, [matchedCards, onWin, startingCards.length]);

  const handleCardClick = (index, cardValue) => {
    if (flippedIndices.length < 2 && !flippedIndices.includes(index)) {
      setFlippedIndices((prev) => [...prev, index]);
      startTimer();
      startMusic();
    }
  };

  return (
    <div className="game-content">
      <div className="game-board">
        {cards.map((cardValue, index) => (
          <Card
            key={index}
            index={index}
            cardValue={cardValue}
            handleClick={handleCardClick}
            isFlipped={flippedIndices.includes(index)}
            isMatched={matchedCards.includes(cardValue)}
          />
        ))}
      </div>
    </div>
  );
}
