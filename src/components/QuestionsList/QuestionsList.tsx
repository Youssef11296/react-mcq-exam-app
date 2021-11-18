// Modules & Hooks
import { questions } from "../../utils/questions.json";
// Components
import QuestionItem from "../QuestionItem/QuestionItem";
// Styles
import "./QuestionsList.scss";

const QuestionsList = () => {
  return (
    <div className="questions__list">
      <h1>Exam</h1>
      {questions.map((questionItem, index) => (
        <QuestionItem key={questionItem.id} questionItem={questionItem} />
      ))}
    </div>
  );
};

export default QuestionsList;
