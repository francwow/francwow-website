import { useContext, useState } from "react";
import MenuActiveContext from "./contexts/menuActiveContext";
import Description from "./Description";
import Portfolio from "./Portfolio";

const MainSection = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [visible, setVisible] = useState(false);
  const menuActive = useContext(MenuActiveContext);

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
            style={
              showPortfolio
                ? { transform: "rotate(180deg)" }
                : { transform: "rotate(0deg)" }
            }
            className="arrow-container"
            onKeyDown={(e) => e.preventDefault}
            onClick={arrowHandle}
          >
            <span
              style={showPortfolio ? { color: "inherit" } : { color: "white" }}
              className="material-symbols-outlined arrow"
            >
              expand_circle_down
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
