// modules & Hooks
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
// Styles
import "./ResultScreen.scss";

const ResultScreen = () => {
  // selectors
  const rightAnswersNum = useSelector(
    (state: RootState) => state.questions.rightAnswersNum
  );
  const questionNum = useSelector(
    (state: RootState) => state.questions.questionNum
  );

  return (
    <div className="result__screen">
      <div className="result__container">
        {questionNum <= 7 ? (
          <>
            <h1 className="message">
              Hmm, it seems that you have not finished the exam yet
            </h1>
            <div className="options">
              <button>
                <Link to="/">Back to the exam</Link>
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="right__answers">
              <p>Total of your right answers: {rightAnswersNum}</p>
            </div>
            <div className="wrong__answers">
              <p>Total of your wrong answers: {7 - rightAnswersNum}</p>
            </div>
            <div className="result__percentage">
              <p>
                Your result in percentage is %
                {Math.round((rightAnswersNum / 7) * 100)}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ResultScreen;
