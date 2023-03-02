import MenuActiveContext from "./contexts/menuActiveContext";
import LanguageContext from "./contexts/languageContext";
import { useContext, useEffect, useRef } from "react";
import { useMediaQuery } from "usehooks-ts";
import WorkMobile from "./WorkMobile";
import WorkDeskTop from "./WorkDeskTop";
import Footer from "./Footer";
import Icons from "./Icons";

const Work = () => {
  const contRef = useRef(null);
  const { menuActive } = useContext(MenuActiveContext);
  const { englishActive } = useContext(LanguageContext);
  const mobile = useMediaQuery("(max-width: 480px)");

  return (
    <div className={`main-section  ${menuActive ? "move-left" : ""}`}>
      <div ref={contRef} className="work-wrapper work-background">
        {mobile ? <WorkMobile /> : <WorkDeskTop />}
      </div>
    </div>
  );
};

export default Work;
