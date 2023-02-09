import { useRef, useContext } from "react";
import MenuActiveContext from "./contexts/menuActiveContext";

const Overlay = (props) => {
  const overlayRef = useRef(null);
  const menuActive = useContext(MenuActiveContext);

  return (
    <div
      tabIndex="0"
      role="button"
      aria-pressed="false"
      onKeyDown={(e) => e.preventDefault}
      onClick={() => props.setMenuActive(false)}
      ref={overlayRef}
      className={menuActive ? "overlay active" : "overlay"}
    ></div>
  );
};

export default Overlay;
