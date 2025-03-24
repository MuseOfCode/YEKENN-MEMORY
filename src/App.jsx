import { useState } from "react";
import useSound from "use-sound";
import "./App.css";
import Header from "./components/header.jsx";
import GameBoard from "./components/game_board.jsx";
import Footer from "./components/footer.jsx";
import Timer from "./components/timer.jsx";

function App() {
  const [gameKey, setGameKey] = useState(1);
  const [message, setMessage] = useState("");
  const [gameWon, setGameWon] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [cardCounter, setCardCounter] = useState(0);
  const [musicPlayed, setMusicPlayed] = useState(false);
  const [firstCardFlipped, setFirstCardFlipped] = useState(false);

  const [playSound, { stop }] = useSound("/spider-dance.mp3");

  const handleCardCount = () => {
    setCardCounter((prevCount) => prevCount + 1);
    console.log(cardCounter);
  };

  const handleTimeUp = () => {
    if (!gameWon) {
      setMessage("You lost. Press restart to have another go");
      stop();
    }
  };

  const handleWin = () => {
    setMessage("You won. Press restart to have another go");
    setGameWon(true);
    stop();
  };

  const restartGame = () => {
    setMessage("");
    setGameWon(false);
    setTimeLeft(60); // Reset timer
    setGameKey((prevKey) => prevKey + 1);
    setCardCounter(0);
    setFirstCardFlipped(false);
    setMusicPlayed(false);
  };

  const startMusic = () => {
    if (!musicPlayed) {
      playSound();
      setMusicPlayed(true);
    }
  };

  const startTimer = () => {
    if (!firstCardFlipped) {
      setFirstCardFlipped(true);
    }
  };

  return (
    <div className="game-frame">
      <Header cardCount={cardCounter} />

      {message ? (
        <div className="message-container" onClick={restartGame}>
          <h2>{message}</h2>
          <button>Restart</button>
        </div>
      ) : (
        <>
          <GameBoard
            key={gameKey}
            onWin={handleWin}
            handleCardCount={handleCardCount}
            startMusic={startMusic}
            startTimer={startTimer}
          />
          <Timer
            key={`timer-${gameKey}`}
            timeLeft={timeLeft}
            setTimeLeft={setTimeLeft}
            onTimeUp={handleTimeUp}
            gameWon={gameWon}
            firstCardFlipped={firstCardFlipped}
          />
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;
