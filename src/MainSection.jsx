import { useContext, useRef, useEffect, useState } from "react";
import MenuActiveContext from "./contexts/menuActiveContext";
import Description from "./Description";
import Footer from "./Footer";

const MainSection = () => {
  let [rotateDiv, setRotateDiv] = useState(0);
  const [visible, setVisible] = useState(false);
  const menuActive = useContext(MenuActiveContext);

  useEffect(() => {
    rotate();
  }, []);

  const rotate = () => {
    let noScroll = 0;
    window.addEventListener("scroll", () => {
      let scrollDown = window.pageYOffset / 2;
      if (scrollDown > noScroll) {
        setRotateDiv(scrollDown);
      } else {
        setRotateDiv(scrollDown);
      }
    });
  };

  const arrowHandle = () => {
    setVisible(true);
    console.log(visible);
  };

  const style = {
    transform: `rotate(${rotateDiv}deg)`,
    transition: "transform 150ms ease",
  };

  return (
    <div className={menuActive ? "main-section move-left" : "main-section"}>
      {/* <div style={style} className="moon-container">
        <div className="moon-one"></div>
        <div className="moon-two"></div>
      </div> */}

      <div className="home-wrapper">
        <div className="fos-presentation">
          {/* <div className="img-container">
            <img src="src/assets/profilepic.jpg" alt="Francisco smiling" />
          </div> */}
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
            className="arrow-container"
            onKeyDown={(e) => e.preventDefault}
            onClick={arrowHandle}
          >
            <span className="material-symbols-outlined arrow">
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
