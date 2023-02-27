import { useContext, useState } from "react";
import MenuActiveContext from "./contexts/menuActiveContext";
import LanguageContext from "./contexts/languageContext";
import Description from "./Description";
import Portfolio from "./Portfolio";

const MainSection = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [visible, setVisible] = useState(false);
  const { menuActive } = useContext(MenuActiveContext);
  const { englishActive, setEnglishActive } = useContext(LanguageContext);

  const arrowHandle = () => {
    setVisible((visible) => !visible);
    setShowPortfolio((showPortfolio) => !showPortfolio);
  };

  return (
    <div
      className={`main-section main-background ${
        menuActive ? "move-left" : ""
      } ${showPortfolio ? "" : ""}`}
    >
      <div className="home-wrapper">
        <div className="fos-presentation">
          <Description visible={visible} />
          <Portfolio visible={visible} />
          <div
            tabIndex="0"
            role="button"
            aria-pressed="false"
            onKeyDown={(e) => e.preventDefault}
            onClick={arrowHandle}
            className="arrow-wrapper"
          >
            <div
              style={
                showPortfolio
                  ? { transform: "rotate(180deg)" }
                  : { transform: "rotate(0deg)" }
              }
              className="arrow-container"
            >
              <span
                style={
                  showPortfolio ? { color: "inherit" } : { color: "white" }
                }
                className="arrow"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
