// Modules & Hooks
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../store";
// Styles
import "./Header.scss";

const Header = () => {
  // selectors
  const user = useSelector((state: RootState) => state.main.user);
  return (
    <header>
      <div className="header__logo">
        <h1>MCQ</h1>
      </div>
      <div className="header__nav">
        <nav>
          <ul>
            <li>
              <NavLink activeclassname="is-active" to="/exam">
                Exam
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname="is-active" to="/result">
                Result
              </NavLink>
            </li>
            {!user ? (
              <li>
                <NavLink activeclassname="is-active" to="/">
                  Login
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink activeclassname="is-active" to="/">
                  Logout
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
