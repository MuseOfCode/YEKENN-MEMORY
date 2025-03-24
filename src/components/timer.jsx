import { useEffect } from "react";

export default function Timer({
  timeLeft,
  setTimeLeft,
  onTimeUp,
  gameWon,
  firstCardFlipped,
}) {
  useEffect(() => {
    if (!firstCardFlipped) return;

    if (timeLeft === 0) {
      setTimeout(() => onTimeUp(), 0);
      return;
    }

    if (gameWon) return;

    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, gameWon, onTimeUp, firstCardFlipped]);

  return (
    <div className="Timer">
      <h2>TIMER: {timeLeft}s</h2>
    </div>
  );
}
