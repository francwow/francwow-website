import { useContext } from "react";
import { Link } from "react-router-dom";
import MenuActiveContext from "./contexts/menuActiveContext";
import NavigationMenu from "./NavigationMenu";

const Header = () => {
  const { menuActive, setMenuActive } = useContext(MenuActiveContext);

  return (
    <div className="header">
      <div className="main-nav">
        <Link to="/" onClick={() => setMenuActive(false)}>
          <div className="logo">
            <span>{`francwow={webDeveloper}`}</span>
          </div>
        </Link>

        <div className="burger">
          <button
            onClick={() => {
              setMenuActive(!menuActive);
            }}
            className={menuActive ? "burger-btn toggle" : "burger-btn"}
          >
            <div className="line_1"></div>
            <div className="line_2"></div>
            <div className="line_3"></div>
          </button>
        </div>
        <NavigationMenu setMenuActive={setMenuActive} menuActive={menuActive} />
      </div>
    </div>
  );
};

export default Header;
