import React, { useState } from "react";
import "./App.css";

function Fleche() {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleFleche = (points, zone) => {
    if (gameOver) {
      return;
    }

    if (score >= 501) {
      setGameOver(true);
      alert("Bravo! Vous avez gagné !");
      return;
    }

    let multiplier = 1;

    switch (zone) {
      case "anneau extérieur":
        multiplier = 2;
        break;
      case "anneau intérieur":
        multiplier = 3;
        break;
      case "Bull's eye":
        setScore(score + 50);
        break;
      case "anneau central":
        setScore(score + 25);
        break;
      default:
        break;
    }

    const score2 = points * multiplier;
    const newScore = score + score2;

    if (newScore >= 501) {
      setScore(501);
      setGameOver(true);
      alert("Bravo! Vous avez gagné !");
    } else {
      setScore(newScore);
    }
  };

  const handleResetJeux = () => {
    setScore(0);
    setGameOver(false);
  };

  return (
    <div>
      <h1 className="titre">501 Le Jeux de Fléchettes</h1>
      <img src="./src/img/fleche.avif"></img>
      <p>Score: {score}</p>
      {gameOver ? (
        <button onClick={handleResetJeux}>Recommencer?</button>
      ) : (
        <div className="btn">
          <button onClick={() => handleFleche(20, "anneau intérieur")}>
            Lancer fléchette {<br />} (20, anneau intérieur)
          </button>
          <button onClick={() => handleFleche(1, "simple")}>
            Lancer fléchette {<br />} (1, simple)
          </button>
          <button onClick={() => handleFleche(25, "anneau central")}>
            Lancer fléchette {<br />} (25, anneau central)
          </button>
          <button onClick={() => handleFleche(50, "Bull's eye")}>
            Lancer une fléchette {<br />} (Bull's eye)
          </button>
        </div>
      )}
    </div>
  );
}

export default Fleche;
