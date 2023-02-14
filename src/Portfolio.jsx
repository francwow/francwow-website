const Portfolio = (props) => {
  return (
    <div
      className={
        props.visible ? "portfolio-container visible" : "portfolio-container"
      }
    >
      <div className="portfolio">
        <div className="info-link-container">
          <h2>Learn more about me!</h2>
        </div>
        <div className="info-link-container">
          <h2>Have a look at my work!</h2>
        </div>
        <div className="info-link-container">
          <h2>Contact me!</h2>
          <div className="link-container">
            <button
              onClick={(e) => {
                window.location = "mailto:francwow06@gmail.com";
                e.preventDefault();
              }}
              className="btn"
            >
              SEND EMAIL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
