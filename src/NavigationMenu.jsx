import Icons from "./Icons";
import { Link } from "react-router-dom";
import Languages from "./Languages";
import { useContext } from "react";
import LanguageContext from "./contexts/languageContext";

const NavigationMenu = (props) => {
  const { englishActive } = useContext(LanguageContext);

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
        {englishActive ? (
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
        ) : (
          <nav className="nav-menu">
            <Link
              className="link"
              to="/about"
              onClick={() => props.setMenuActive(false)}
            >
              Acerca
            </Link>
            <Link
              className="link"
              to="/work"
              onClick={() => props.setMenuActive(false)}
            >
              Trabajo
            </Link>
            <Link
              className="link"
              to="/contact"
              onClick={() => props.setMenuActive(false)}
            >
              Contacto
            </Link>
          </nav>
        )}
        <Languages />
        <Icons />
      </div>
    </div>
  );
};

export default NavigationMenu;
