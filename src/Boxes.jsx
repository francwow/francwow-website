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

  let boxes = [];
  for (let i = 0; i < 12; i++) {
    boxes.push(i);
  }

  return (
    <div
      ref={boxRef}
      className={props.inverted ? "box-wrapper-inverted" : "box-wrapper"}
    >
      {boxes.map((box) => {
        return (
          <div key={box} className="box-container">
            <span className="box"></span>
          </div>
        );
      })}
    </div>
  );
};

export default Boxes;
