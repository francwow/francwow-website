import { useContext } from "react";
import { Link } from "react-router-dom";
import LanguageContext from "./contexts/languageContext";

const Portfolio = (props) => {
  const { englishActive } = useContext(LanguageContext);

  return (
    <div
      className={
        props.visible ? "portfolio-container visible" : "portfolio-container"
      }
    >
      {englishActive ? (
        <div className="portfolio">
          <div className="info-link-container">
            <div className="cover-1"></div>
            <Link to="/about">
              <h2>ABOUT ME</h2>
            </Link>
          </div>
          <div className="info-link-container">
            <div className="cover-2"></div>
            <Link to="/work">
              <h2>MY WORK</h2>
            </Link>
          </div>
          <div className="info-link-container">
            <div className="cover-3"></div>
            <Link to="/contact">
              <h2>CONTACT</h2>
            </Link>
          </div>
        </div>
      ) : (
        <div className="portfolio">
          <div className="info-link-container">
            <div className="cover-1"></div>
            <Link to="/about">
              <h2>ACERCA DE MI</h2>
            </Link>
          </div>
          <div className="info-link-container">
            <div className="cover-2"></div>
            <Link to="/work">
              <h2>MI TRABAJO</h2>
            </Link>
          </div>
          <div className="info-link-container">
            <div className="cover-3"></div>
            <Link to="/contact">
              <h2>CONTACTO</h2>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
