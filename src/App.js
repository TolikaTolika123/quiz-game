import "normalize.css";
import "./App.css";
import Start from "./components/Start";
import { useState } from "react";
import { GameContext } from "./context";
import GameField from "./components/GameField";
import Finish from "./components/Finish";

function App() {
  const [gameStatus, setGameStatus] = useState("start");
  const [questionCount, setQuestionCount] = useState(1);
  const [score, setScore] = useState(0)
  const maxScore = 100;

  function renderSwitch(param) {
    switch (param) {
      case "progress":
        return <GameField />;
        case "finish":
        return <Finish />;
      default:
        return <Start />;
    }
  }
  return (
    <GameContext.Provider
      value={{ gameStatus, setGameStatus, questionCount, setQuestionCount, score, setScore, maxScore }}
    >
      <div className="App">
        <div className="game__container">
          {renderSwitch(gameStatus)}
        </div>
      </div>
    </GameContext.Provider>
  );
}

export default App;
