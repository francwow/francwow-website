import { useContext, useRef, useEffect, useState } from "react";
import MenuActiveContext from "./contexts/menuActiveContext";
import Description from "./Description";
import Footer from "./Footer";

const MainSection = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [visible, setVisible] = useState(false);
  const menuActive = useContext(MenuActiveContext);

  const arrowHandle = () => {
    setVisible((visible) => !visible);
    setShowPortfolio((showPortfolio) => !showPortfolio);
    console.log(visible);
  };

  return (
    <div
      className={`main-section ${menuActive ? "move-left" : ""} ${
        showPortfolio ? "invert-color" : ""
      }`}
    >
      <div className="home-wrapper">
        <div className="fos-presentation">
          <Description visible={visible} />
          <div
            className={
              visible ? "portfolio-container visible" : "portfolio-container"
            }
          >
            <div className="portfolio">
              <h2>Have a look at my work!</h2>
            </div>
          </div>
          <div
            tabIndex="0"
            role="button"
            aria-pressed="false"
            style={
              showPortfolio
                ? { transform: "rotate(90deg)" }
                : { transform: "rotate(-90deg)" }
            }
            className="arrow-container"
            onKeyDown={(e) => e.preventDefault}
            onClick={arrowHandle}
          >
            <span
              style={showPortfolio ? { color: "deeppink" } : { color: "white" }}
              className="material-symbols-outlined arrow"
            >
              expand_circle_down
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainSection;
