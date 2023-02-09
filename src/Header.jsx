import { useContext } from "react";
import MenuActiveContext from "./contexts/menuActiveContext";
import NavigationMenu from "./NavigationMenu";

const Header = (props) => {
  const menuActive = useContext(MenuActiveContext);

  return (
    <div className="header">
      <div className="main-nav">
        <a href="#">
          <div className="logo">
            <span>{`FOS={webDeveloper}`}</span>
          </div>
        </a>

        <div className="burger">
          <button
            onClick={() => {
              props.setMenuActive(!menuActive);
            }}
            className={menuActive ? "burger-btn toggle" : "burger-btn"}
          >
            <div className="line_1"></div>
            <div className="line_2"></div>
            <div className="line_3"></div>
          </button>
        </div>
        <NavigationMenu menuActive={menuActive} />
      </div>
    </div>
  );
};

export default Header;
