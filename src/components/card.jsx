import { useState } from "react";

export default function Card({
  cardValue,
  index,
  handleClick,
  isFlipped,
  isMatched,
}) {
  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""} ${
        isMatched ? "matched" : ""
      }`}
      onClick={() => handleClick(index, cardValue)}
    >
      <div className="card-inner">
        <div className="card-front">???</div>
        <div className="card-back">{cardValue}</div>
      </div>
    </div>
  );
}
