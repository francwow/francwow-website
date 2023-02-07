import { useRef, useEffect } from "react";

const MainSection = (props) => {
  const mainSectionRef = useRef(null);

  useEffect(() => {
    if (mainSectionRef.current) {
      if (props.menuActive) {
        mainSectionRef.current.classList.add("hide");
      } else {
        mainSectionRef.current.classList.remove("hide");
      }
    }
  }, [props.menuActive]);

  return (
    <div ref={mainSectionRef} className="main-section">
      <h1>Hello! This is my MainSection</h1>
    </div>
  );
};

export default MainSection;
