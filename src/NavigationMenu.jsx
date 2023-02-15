import Icons from "./Icons";
import { Link } from "react-router-dom";

const NavigationMenu = (props) => {
  return (
    <div
      className={
        props.menuActive ? "nav-menu-wrapper show" : "nav-menu-wrapper"
      }
    >
      <div
        className={
          props.menuActive
            ? "nav-menu-container fade-in"
            : "nav-menu-container fade-out"
        }
      >
        <nav className="nav-menu">
          <Link
            className="link"
            to="/about"
            onClick={() => props.setMenuActive(false)}
          >
            About
          </Link>
          <Link
            className="link"
            to="/work"
            onClick={() => props.setMenuActive(false)}
          >
            Work
          </Link>
          <Link
            className="link"
            to="/contact"
            onClick={() => props.setMenuActive(false)}
          >
            Contact
          </Link>
        </nav>
        <Icons />
      </div>
    </div>
  );
};

export default NavigationMenu;
