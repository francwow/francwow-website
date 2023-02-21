import { useContext } from "react";
import MenuActiveContext from "./contexts/menuActiveContext";
import Footer from "./Footer";
import Icons from "./Icons";

const Contact = () => {
  const menuActive = useContext(MenuActiveContext);

  return (
    <div
      className={`main-section ${menuActive ? "move-left" : ""} invert-color`}
    >
      <div className="contact-wrapper contact-background">
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
        <div className="footer-wrapper">
          <Icons />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Contact;
