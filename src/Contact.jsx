import { useContext } from "react";
import MenuActiveContext from "./contexts/menuActiveContext";
import Footer from "./Footer";
import Asteroids from "./Asteroids";
import Icons from "./Icons";
import LanguageContext from "./contexts/languageContext";

const Contact = () => {
  const { menuActive } = useContext(MenuActiveContext);
  const { englishActive } = useContext(LanguageContext);

  return (
    <div className={`main-section ${menuActive ? "move-left" : ""}`}>
      <div className="contact-wrapper contact-background">
        <Asteroids />
        {englishActive ? (
          <div className="contact-container">
            <h1>I would love to work with you!</h1>
            <p>
              Im eager to continue growing as a front-end developer. Send me a
              message anytime.
            </p>
            <div className="link-container">
              <button
                onClick={(e) => {
                  window.location = "mailto:francwow06@gmail.com";
                  e.preventDefault();
                }}
                className="btn"
              >
                SEND EMAIL
              </button>
            </div>
          </div>
        ) : (
          <div className="contact-container">
            <h1>¡Me encantaría trabajar contigo!</h1>
            <p>
              Estoy ansioso por continuar creciendo como desarrollador
              front-end. Envíame un mensaje en cualquier momento.
            </p>
            <div className="link-container">
              <button
                onClick={(e) => {
                  window.location = "mailto:francwow06@gmail.com";
                  e.preventDefault();
                }}
                className="btn"
              >
                CONTACTAR
              </button>
            </div>
          </div>
        )}

        <div className="footer-wrapper">
          <Icons />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Contact;
