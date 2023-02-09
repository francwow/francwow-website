import { useContext, useRef, useEffect } from "react";
import MenuActiveContext from "./contexts/menuActiveContext";

const MainSection = () => {
  const menuActive = useContext(MenuActiveContext);
  let stickLoopInterval = null;
  const stickRef = useRef(null);

  useEffect(() => {
    loop();
    return () => {
      clearInterval(stickLoopInterval);
    };
  }, []);

  const loop = () => {
    stickLoopInterval = setInterval(() => {
      stickRef.current.classList.toggle("visible");
    }, 500);
  };

  return (
    <div className={menuActive ? "main-section hide" : "main-section"}>
      <div className="home-wrapper">
        <div className="fos-presentation">
          {/* <div className="img-container">
            <img src="src/assets/profilepic.jpg" alt="Francisco smiling" />
          </div> */}
          <div className="description-container">
            <div className="description">
              <p className="desc-text-one">Hi!</p>
            </div>
            <div className="description">
              <strong>
                <p className="desc-text-two">My name is Francisco,</p>
              </strong>
            </div>
            <div className="description">
              <p className="desc-text-three">
                I love building websites.{" "}
                <span ref={stickRef} className="text-stick"></span>
              </p>
            </div>
            <div className="about-link-container">
              <button className="btn">Contact me</button>
            </div>
            {/* IDEA: Objeto circular semejante al sol o la luna, que al hacer scroll var rotando */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
