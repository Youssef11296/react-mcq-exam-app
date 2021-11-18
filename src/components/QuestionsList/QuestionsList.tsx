// Modules & Hooks
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import { questions } from "../../utils/questions.json";
// Components
import QuestionItem from "../QuestionItem/QuestionItem";
// Styles
import "./QuestionsList.scss";

const QuestionsList = () => {
  // selectors
  const questionNum = useSelector(
    (state: RootState) => state.questions.questionNum
  );
  console.log({ questionNum });

  return (
    <div className="questions__list">
      <div className="questions__list__container">
        {questions.map((questionItem, index) =>
          questionItem.id === questionNum ? (
            <QuestionItem key={questionItem.id} questionItem={questionItem} />
          ) : null
        )}
        {questionNum !== 8 && <p className="question__number">{questionNum}</p>}

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
};

export default QuestionsList;
