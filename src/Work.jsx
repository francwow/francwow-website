import MenuActiveContext from "./contexts/menuActiveContext";
import { useContext, useRef } from "react";
import { useMediaQuery } from "usehooks-ts";
import WorkMobile from "./WorkMobile";
import WorkDeskTop from "./WorkDeskTop";

const Work = () => {
  const contRef = useRef(null);
  const { menuActive } = useContext(MenuActiveContext);
  const mobile = useMediaQuery("(max-width: 991px)");

  return (
    <div className={`main-section  ${menuActive ? "move-left" : ""}`}>
      <div ref={contRef} className="work-wrapper work-background">
        {mobile ? <WorkMobile /> : <WorkDeskTop />}
      </div>
    </div>
  );
};

export default Work;
