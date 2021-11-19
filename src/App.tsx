// modules & hooks
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import Header from "./components/Header/Header";
// screens
import ExamScreen from "./screens/ExamScreen/ExamScreen";
import ResultScreen from "./screens/ResultScreen/ResultScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
// styles
import "./App.scss";

const App = () => {
  return (
    <Router>
      <div className="app">
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
