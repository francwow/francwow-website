import { useRef, useContext } from "react";
import MenuActiveContext from "./contexts/menuActiveContext";

const Overlay = () => {
  const overlayRef = useRef(null);
  const { menuActive, setMenuActive } = useContext(MenuActiveContext);

  return (
    <div
      tabIndex="0"
      role="button"
      aria-pressed="false"
      onKeyDown={(e) => e.preventDefault}
      onClick={() => setMenuActive(false)}
      ref={overlayRef}
      className={menuActive ? "overlay active" : "overlay"}
    ></div>
  );
};

export default Overlay;
