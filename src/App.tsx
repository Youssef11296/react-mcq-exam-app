// Modules & Hooks
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Header from "./components/Header/Header";
// Screens
import ExamScreen from "./screens/ExamScreen/ExamScreen";
// Styles
import "./App.scss";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<ExamScreen />} />
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/result" element={<h1>Result</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
