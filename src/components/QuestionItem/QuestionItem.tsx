// Styles
import "./QuestionItem.scss";
// IProps
interface IProps {
  questionItem: Question;
}

const QuestionItem: React.FC<IProps> = ({ questionItem }) => {
  const { question, correct_answer, incorrect_answers } = questionItem;
  const qusetionOptions = [...incorrect_answers, correct_answer];

  return (
    <div className="question__item">
      <div className="question__body">
        <h4>{question}</h4>
        <div className="question__options">
          {qusetionOptions.map((option, index) => (
            <p key={option}>{option}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionItem;
