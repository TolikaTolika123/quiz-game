import React, { useContext } from "react";
import { GameContext } from "../context";

const Finish = () => {
  const { score, setScore, maxScore, setGameStatus } = useContext(GameContext);

  function startAgain() {
    setScore(0);
    setGameStatus('progress')
  }
  return (
    <div className="finish menu">
      <h1>
        Congratulations you scored {score} of {maxScore}
      </h1>
      <button onClick={startAgain}>Start Again</button>
    </div>
  );
};

export default Finish;
