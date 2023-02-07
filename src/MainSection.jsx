const MainSection = (props) => {
  const mainSection = document.querySelector(".main-section");

  if (props.menuActive) {
    mainSection.classList.add("hide");
  } else {
    mainSection.classList.remove("hide");
  }

  return (
    <div className="main-section">
      <h1>Hello! This is my MainSection</h1>
    </div>
  );
};

export default MainSection;
