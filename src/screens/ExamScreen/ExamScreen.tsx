// Components
import { useSelector } from "react-redux";
import QuestionsList from "../../components/QuestionsList/QuestionsList";
import RedirectedMessage from "../../components/RedirectedMessage/RedirectedMessage";
import { RootState } from "../../store";
// Styles
import "./ExamScreen.scss";

const ExamScreen = () => {
  // selectors
  const user = useSelector((state: RootState) => state.main.user);

  return (
    <div className="exam__screen">
      {!user ? (
        <RedirectedMessage
          message="Oops, it seems that you have not logged in yet"
          option="login"
          optionPath="/"
        />
      ) : (
        <QuestionsList />
      )}
    </div>
  );
};

export default ExamScreen;
