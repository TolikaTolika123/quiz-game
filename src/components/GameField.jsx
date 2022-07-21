import React, { useContext, useState, useEffect } from "react";
import { GameContext } from "../context";
import questions from "../questions";

const GameField = () => {
  const [question, setQuestion] = useState({ question: "", answers: {}, correctAnswer: '' });
  const { questionCount, setQuestionCount, setGameStatus, setScore, maxScore } = useContext(GameContext);
  const [currentGuess, setCurrentGuess] = useState(null)


  useEffect(() => {
    setQuestion(questions[questionCount - 1]);
  }, [questionCount]);

  function submitAnswer(e) {
    e.preventDefault();
    if (currentGuess) {
      if (currentGuess === question.correctAnswer) {
        setScore(prev => prev + maxScore / questions.length )
      }
      if (questionCount === questions.length) {
        setGameStatus('finish')
        setCurrentGuess(null)
        setQuestionCount(1)
      } else {
        setQuestionCount(prev => prev + 1)
      }
    }
    
  }
  return (
    <div className="game__field">
      <p className="game__suptitle">Question {questionCount} of {questions.length}</p>
      <h2 className="game__title">{question.question}</h2>
      <form className="game__answers" onSubmit={submitAnswer}>
        {Object.entries(question.answers).map((answer) => (
          <div key={answer[0]} className="game__answer">
            <input
              type="radio"
              id={answer[0]}
              name="answer"
              value={answer[0]}
              onChange={e => setCurrentGuess(answer[0])}
            />
            <label htmlFor={answer[0]}>{answer[1]}</label>
          </div>
        ))}
        <button>Submit answer!</button>
      </form>
    </div>
  );
};

export default GameField;
