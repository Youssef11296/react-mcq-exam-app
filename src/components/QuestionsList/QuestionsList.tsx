// Modules & Hooks
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import { questions } from "../../utils/questions.json";
// Components
import QuestionItem from "../QuestionItem/QuestionItem";
// Styles
import "./QuestionsList.scss";

// shuffled questions
const shuffledQuestions = questions.sort(() => 0.5 - Math.random());

const QuestionsList = React.memo(() => {
  console.log(shuffledQuestions);

  // selectors
  const questionNum = useSelector(
    (state: RootState) => state.questions.questionNum
  );
  console.log({ questionNum });

  return (
    <div className="questions__list">
      <div className="questions__list__container">
        {shuffledQuestions.map((questionItem, index) =>
          index === questionNum - 1 ? (
            <>
              <QuestionItem key={questionItem.id} questionItem={questionItem} />
              <p className="question__number">{index + 1}</p>
            </>
          ) : null
        )}

        {questionNum === 8 && (
          <div className="options">
            <button>
              <Link to="/result">Check your result</Link>
            </button>
            <button>
              <Link to="/">Start a new exam</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
});

export default QuestionsList;
