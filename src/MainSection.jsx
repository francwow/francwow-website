import { useContext } from "react";
import MenuActiveContext from "./contexts/menuActiveContext";

const MainSection = () => {
  const menuActive = useContext(MenuActiveContext);

  return (
    <div className={menuActive ? "main-section hide" : "main-section"}>
      <div id="about">
        <h1>Hello! This is my MainSection</h1>
      </div>
      <div id="work">
        <h1>Hello! This is my MainSection</h1>
      </div>
      <div id="contact">
        <h1>Hello! This is my MainSection</h1>
      </div>
    </div>
  );
};

export default MainSection;
