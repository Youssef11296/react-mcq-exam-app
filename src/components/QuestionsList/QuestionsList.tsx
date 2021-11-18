// Modules & Hooks
import { questions } from "../../utils/questions.json";
// Components
import QuestionItem from "../QuestionItem/QuestionItem";
// Styles
import "./QuestionsList.scss";

const QuestionsList = () => {
  return (
    <div className="questions__list">
      {questions.map(
        (questionItem, index) =>
          questionItem.id === 1 && (
            <QuestionItem key={questionItem.id} questionItem={questionItem} />
          )
      )}
    </div>
  );
};

export default QuestionsList;
