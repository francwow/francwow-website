import { useRef, useEffect, useState } from "react";

const Description = (props) => {
  // requestAnimationFrame
  // const [stickVisible, setStickVisible] = useState(false);
  let stickLoopInterval = null;
  const stickRef = useRef(null);

  useEffect(() => {
    loop();
    // requestAnimationFrame
    // loopAnimation();
    return () => {
      clearInterval(stickLoopInterval);
    };
  }, []);

  const loop = () => {
    stickLoopInterval = setInterval(() => {
      stickRef.current.classList.toggle("visible");
    }, 500);
  };

  // requestAnimationFrame
  // let requestAnimationFrame = window.requestAnimationFrame;

  // let last = 0;
  // let speed = 0.5;

  // function loopAnimation(timeStamp) {
  //   let timeInSecond = timeStamp / 1000;

  //   if (timeInSecond - last >= speed) {
  //     last = timeInSecond;
  //     setStickVisible((prevState) => !prevState);
  //   }

  //   requestAnimationFrame(main);
  // }

  return (
    <div
      className={
        props.visible ? "description-container hide" : "description-container"
      }
    >
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
      {/* <div className="about-link-container">
        <button className="btn">Contact me</button>
      </div> */}
    </div>
  );
};

export default Description;
