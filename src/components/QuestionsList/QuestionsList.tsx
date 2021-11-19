// modules & hooks
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { questions } from "../../utils/questions.json";
// components
import QuestionItem from "../QuestionItem/QuestionItem";
import RedirectMessage from "../RedirectedMessage/RedirectedMessage";
// styles
import "./QuestionsList.scss";

// shuffled questions
const shuffledQuestions = questions.sort(() => 0.5 - Math.random());

const QuestionsList = () => {
  // selectors
  const questionNum = useSelector((state: RootState) => state.main.questionNum);

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
          <RedirectMessage
            message="You have successully finished the exam"
            option="Check your result"
            optionPath="/result"
          />
        )}
      </div>
    </div>
  );
};

export default QuestionsList;
