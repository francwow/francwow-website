import { useRef, useEffect, useState, useContext } from "react";
import LanguageContext from "./contexts/languageContext";

const Description = (props) => {
  const [stickVisible] = useState(false);
  let stickLoopInterval = null;
  const stickRef = useRef(null);
  const { englishActive } = useContext(LanguageContext);

  useEffect(() => {
    loop();
    return () => {
      clearInterval(stickLoopInterval);
    };
  }, []);

  const loop = () => {
    stickLoopInterval = setInterval(() => {
      stickRef.current.classList.toggle("visible");
      console.log(stickVisible);
    }, 500);
  };

  return (
    <div
      className={
        props.visible ? "description-container hide" : "description-container"
      }
    >
      {englishActive ? (
        <div>
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
              <span
                ref={stickRef}
                className={stickVisible ? "text-stick visible" : "text-stick"}
              ></span>
            </p>
          </div>
        </div>
      ) : (
        <div>
          <div style={{ paddingLeft: "15px" }} className="description">
            <p className="desc-text-one">Hola!</p>
          </div>
          <div className="description">
            <strong>
              <p className="desc-text-two">Me llamo Francisco,</p>
            </strong>
          </div>
          <div className="description">
            <p className="desc-text-three-esp">
              diseño y desarrollo front-end.
              <span
                ref={stickRef}
                className={stickVisible ? "text-stick visible" : "text-stick"}
              ></span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Description;
