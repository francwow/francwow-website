const NavigationMenu = (props) => {
  return (
    <div
      className={
        props.menuActive ? "nav-menu-wrapper show" : "nav-menu-wrapper"
      }
    >
      <nav className="nav-menu">
        <a
          className={props.menuActive ? "link fade-in-1" : "link fade-out-1"}
          href="#about"
        >
          About
        </a>
        <a
          className={props.menuActive ? "link fade-in-2" : "link fade-out-2"}
          href="#work"
        >
          Work
        </a>
        <a
          className={props.menuActive ? "link fade-in-3" : "link fade-out-3"}
          href="#contact"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};

export default NavigationMenu;
