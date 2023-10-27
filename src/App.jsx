import { useEffect, useState } from "react";
import "./app.css";
import questions from "./quizes";
import { useDispatch, useSelector } from "react-redux";
import { quize, quizes } from "./reducer";
function App() {
  const { allQuizes, currentQuiz } = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  let [nextQuizIndex, setNextQuizIndex] = useState(0);
  const [disableBtn, setDisableBtn] = useState(false);
  const [optionIndex, setOptionIndex] = useState(null);
  let [score, setScore] = useState(0);

  useEffect(() => {
    dispatch(quizes(questions));
    dispatch(quize(questions[nextQuizIndex]));
  }, [dispatch, nextQuizIndex]);

  const nextQuizIndexHandler = (e) => {
    nextQuizIndex++;
    setNextQuizIndex(nextQuizIndex);
    if (allQuizes.length - 1 === nextQuizIndex) {
      setDisableBtn(true);
      e.target.style.cursor = "not-allowed";
    }
    const list = document.querySelectorAll(".list");
    list.forEach((item) => {
      item.style.background = "black";
    });

    if (optionIndex === currentQuiz.correctOption) {
      score++;
      setScore(score);
    }
  };
  const optionsHandler = (e) => {
    setOptionIndex(Number(e.target.dataset.ind));
    const list = document.querySelectorAll(".list");
    list.forEach((item) => {
      item.style.background = "black";
    });
    if (e.target.classList.contains("list")) {
      e.target.style.background = "#0ea5e9";
      e.target.style.color = "white";
    }
  };

  return (
    <>
      <div className="container">
        <h1>Web Development Quizes</h1>
        {allQuizes.length - 1 === nextQuizIndex ? (
          <p className="score">{score}/10</p>
        ) : (
          <p className="score">0/10</p>
        )}

        <div className="quizes-container">
          <h3 className="quiz-questoin">{currentQuiz.questionText}</h3>

          <ul className="options" onClick={(e) => optionsHandler(e)}>
            {currentQuiz?.options?.map((option, ind) => {
              return (
                <li data-ind={ind} key={ind} className="list">
                  {ind + 1}. {option}
                </li>
              );
            })}
            <button
              disabled={disableBtn}
              className="next-btn"
              onClick={nextQuizIndexHandler}
            >
              Next
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
