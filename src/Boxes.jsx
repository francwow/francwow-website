import { useEffect } from "react";

const Boxes = () => {
  useEffect(() => {
    const container = document.querySelectorAll("box-container");
    container.forEach((element) => console.log(element));
  }, []);

  return (
    <div className="box-wrapper">
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
