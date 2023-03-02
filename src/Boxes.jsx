import { useRef, useEffect } from "react";

const Boxes = (props) => {
  const boxRef = useRef(null);

  useEffect(() => {
    boxAnimationHandle();
    return () => {};
  }, []);

  function boxAnimationHandle() {
    if (props.inverted) {
      boxRef.current.childNodes.forEach((box) => {
        let randomNumber = Math.random();
        box.style.animation = `moveBoxInverted ${
          randomNumber * 3 + 1
        }s ease infinite ${randomNumber * 4.5}s`;
      });
    } else {
      boxRef.current.childNodes.forEach((box) => {
        let randomNumber = Math.random();
        box.style.animation = `moveBox ${
          randomNumber * 3 + 0.5
        }s ease infinite ${randomNumber * 4.5}s`;
      });
    }

    console.log("boxes are flying");
  }

  return (
    <div
      ref={boxRef}
      className={props.inverted ? "box-wrapper-inverted" : "box-wrapper"}
    >
      <div className="box-container">
        <span className="box"></span>
      </div>
      <div className="box-container">
        <span className="box"></span>
      </div>
      <div className="box-container">
        <span className="box"></span>
      </div>
      <div className="box-container">
        <span className="box"></span>
      </div>
      <div className="box-container">
        <span className="box"></span>
      </div>
      <div className="box-container">
        <span className="box"></span>
      </div>
      <div className="box-container">
        <span className="box"></span>
      </div>
      <div className="box-container">
        <span className="box"></span>
      </div>
      <div className="box-container">
        <span className="box"></span>
      </div>
      <div className="box-container">
        <span className="box"></span>
      </div>
    </div>
  );
};

export default Boxes;
