// Modules & Hooks
import { Link } from "react-router-dom";
// Styles
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="header__logo">
        <h1>MCQ</h1>
      </div>
      <div className="header__nav">
        <nav>
          <ul>
            <li>
              <Link to="/">Exam</Link>
            </li>
            <li>
              <Link to="/result">Result</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
