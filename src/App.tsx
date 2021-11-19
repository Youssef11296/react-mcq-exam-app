// Modules & Hooks
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Header from "./components/Header/Header";
// Screens
import ExamScreen from "./screens/ExamScreen/ExamScreen";
import ResultScreen from "./screens/ResultScreen/ResultScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
// Styles
import "./App.scss";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<ExamScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/result" element={<ResultScreen />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
