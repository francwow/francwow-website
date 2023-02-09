import Icons from "./Icons";

const NavigationMenu = (props) => {
  return (
    <div
      className={
        props.menuActive ? "nav-menu-wrapper show" : "nav-menu-wrapper"
      }
    >
      <div
        className={
          props.menuActive
            ? "nav-menu-container fade-in"
            : "nav-menu-container fade-out"
        }
      >
        <nav className="nav-menu">
          <a className="link" href="#about">
            About
          </a>

          <a className="link" href="#work">
            Work
          </a>
          <a className="link" href="#contact">
            Contact
          </a>
        </nav>
        <Icons />
      </div>
    </div>
  );
};

export default NavigationMenu;
