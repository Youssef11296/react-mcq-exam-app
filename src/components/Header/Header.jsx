// Modules & Hooks
import { NavLink } from "react-router-dom";
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
              <NavLink activeClassName="is-active" to="/">
                Exam
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to="/result">
                Result
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to="/login">
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
