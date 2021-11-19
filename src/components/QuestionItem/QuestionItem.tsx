// Styles
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { answerQuestion } from "../../store/actions";
import "./QuestionItem.scss";
// IProps
interface IProps {
  questionItem: Question;
}

const QuestionItem: React.FC<IProps> = ({ questionItem }) => {
  const { question, correct_answer, incorrect_answers } = questionItem;
  const qusetionOptions = [...incorrect_answers, correct_answer].sort(
    () => 0.5 - Math.random()
  );
  // selectors
  const questionNum = useSelector(
    (state: RootState) => state.questions.questionNum
  );
  // dispatcher
  const dispatch = useDispatch();
  // answer handler
  const answerHandler = (answer: string) => {
    dispatch(
      answerQuestion(questionNum, answer === questionItem.correct_answer)
    );
  };

  return (
    <div className="question__item">
      <div className="question__body">
        <h3>{question}</h3>
        <div className="question__options">
          {qusetionOptions.map((option, index) => (
            <p key={option} onClick={() => answerHandler(option)}>
              {option}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionItem;
