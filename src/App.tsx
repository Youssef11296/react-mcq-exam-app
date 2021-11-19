// modules & hooks
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import spinner from "./assets/images/spinner.gif";
// components
import Header from "./components/Header/Header";
// screens
import ExamScreen from "./screens/ExamScreen/ExamScreen";
import ResultScreen from "./screens/ResultScreen/ResultScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
// styles
import "./App.scss";
import { useSelector } from "react-redux";
import { RootState } from "./store";

const App = () => {
  const isAuth = useSelector((state: RootState) => state.main.userAuth);
  return (
    <Router>
      <div className={`${!isAuth && "overlayed"} app`}>
        {!isAuth && (
          <div className="app__overlay">
            <img src={spinner} alt="Authenticating ..." />
          </div>
        )}
        <Header />
        <Routes>
          <Route path="/exam" element={<ExamScreen />} />
          <Route path="/" element={<LoginScreen />} />
          <Route path="/result" element={<ResultScreen />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
