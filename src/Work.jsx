import MenuActiveContext from "./contexts/menuActiveContext";
import LanguageContext from "./contexts/languageContext";
import { useContext } from "react";

const Work = () => {
  const { menuActive } = useContext(MenuActiveContext);
  const { englishActive } = useContext(LanguageContext);

  return (
    <div className={`main-section ${menuActive ? "move-left" : ""}`}>
      <div className="work-wrapper work-background">
        <div className="work-container">
          <div className="work-item"></div>
          <div className="work-item"></div>
          <div className="work-item"></div>
          <div className="work-item"></div>
          <div className="work-item"></div>
          <div className="work-item"></div>
          <div className="work-item"></div>
        </div>
      </div>
    </div>
  );
};

export default Work;
