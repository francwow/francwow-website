import { Link } from "react-router-dom";

const Portfolio = (props) => {
  return (
    <div
      className={
        props.visible ? "portfolio-container visible" : "portfolio-container"
      }
    >
      <div className="portfolio">
        <div className="info-link-container">
          <div className="cover-1"></div>
          <Link to="/about">
            <h2>ABOUT ME</h2>
          </Link>
        </div>
        <div className="info-link-container">
          <div className="cover-2"></div>
          <Link to="/work">
            <h2>MY WORK</h2>
          </Link>
        </div>
        <div className="info-link-container">
          <div className="cover-3"></div>
          <Link to="/contact">
            <h2>CONTACT</h2>
          </Link>
          {/* <div className="link-container">
            <button
              onClick={(e) => {
                window.location = "mailto:francwow06@gmail.com";
                e.preventDefault();
              }}
              className="btn"
            >
              SEND EMAIL
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
