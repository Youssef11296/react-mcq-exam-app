// Modules & Hooks
import { useSelector } from "react-redux";
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
        {questions.map(
          (questionItem, index) =>
            questionItem.id === questionNum && (
              <QuestionItem key={questionItem.id} questionItem={questionItem} />
            )
        )}
        <p className="question__number">{questionNum}</p>
      </div>
    </div>
  );
};

export default QuestionsList;
