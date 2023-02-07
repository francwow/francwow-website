const Header = (props) => {
  const burgerHandle = () => {
    const navMenu = document.querySelector(".nav-menu-wrapper");
    const burgerBtn = document.querySelector(".burger-btn");

    if (!props.menuActive) {
      navMenu.classList.add("show");
      props.setMenuActive(true);
    } else {
      navMenu.classList.remove("show");
      props.setMenuActive(false);
    }

    burgerBtn.classList.toggle("toggle");
    console.log(props.menuActive);
  };

  return (
    <div className="header">
      <div className="main-nav">
        <div className="logo">
          <h1>fos</h1>
        </div>
        <div className="burger">
          <button onClick={burgerHandle} className="burger-btn">
            <div className="line_1"></div>
            <div className="line_2"></div>
            <div className="line_3"></div>
          </button>
        </div>
        <div className="nav-menu-wrapper"></div>
      </div>
    </div>
  );
};

export default Header;
