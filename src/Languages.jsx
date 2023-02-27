import { useContext } from "react";
import LanguageContext from "./contexts/languageContext";

const Languages = () => {
  const { englishActive, setEnglishActive } = useContext(LanguageContext);

  return (
    <div className="lang-wrapper">
      <div
        tabIndex="0"
        role="button"
        aria-pressed="false"
        onKeyDown={(e) => e.preventDefault}
        onClick={() => {
          setEnglishActive(false);
        }}
        style={!englishActive ? { border: "2px solid white" } : null}
        className="lang-container"
      >
        <span className="lang">ES</span>
      </div>
      <div
        tabIndex="0"
        role="button"
        aria-pressed="false"
        onKeyDown={(e) => e.preventDefault}
        onClick={() => {
          setEnglishActive(true);
        }}
        style={englishActive ? { border: "2px solid white" } : null}
        className="lang-container"
      >
        <span className="lang">EN</span>
      </div>
    </div>
  );
};

export default Languages;
