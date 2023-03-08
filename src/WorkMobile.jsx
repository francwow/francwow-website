import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const WorkMobile = () => {
  const { ref: item1, inView: itemInView1 } = useInView({
    threshold: 0.9,
  });
  const { ref: item2, inView: itemInView2 } = useInView({
    threshold: 0.9,
  });
  const { ref: item3, inView: itemInView3 } = useInView({
    threshold: 0.9,
  });
  const { ref: item4, inView: itemInView4 } = useInView({
    threshold: 0.9,
  });
  const { ref: item5, inView: itemInView5 } = useInView({
    threshold: 0.9,
  });
  const { ref: item6, inView: itemInView6 } = useInView({
    threshold: 0.9,
  });
  const { ref: item7, inView: itemInView7 } = useInView({
    threshold: 0.9,
  });

  return (
    <div className="work-container">
      <Link to="https://www.depositosanantonio.com/" target="_blank">
        <div ref={item1} className="work-item">
          <div
            style={{ backgroundColor: "var(--bg-color-three)" }}
            className="work-item-info"
          >
            <h2>Depósito San Antonio Website</h2>
            <span
              style={{ color: "white" }}
              className="material-symbols-outlined"
            >
              arrow_forward
            </span>
          </div>
        </div>
      </Link>
      <Link to="https://www.latiendo.co/" target="_blank">
        <div ref={item2} className="work-item">
          <div
            style={{ backgroundColor: "rgb(255, 18, 220)" }}
            className="work-item-info"
          >
            <h2>Latiendo Website</h2>
            <span
              style={{ color: "white" }}
              className="material-symbols-outlined"
            >
              arrow_forward
            </span>
          </div>
        </div>
      </Link>
      <Link to="https://flag-finder.vercel.app/" target="_blank">
        <div ref={item3} className="work-item">
          <div
            style={{ backgroundColor: "rgb(255, 18, 250)" }}
            className="work-item-info"
          >
            <h2>Flag Finder Webapp</h2>
            <span
              style={{ color: "white" }}
              className="material-symbols-outlined"
            >
              arrow_forward
            </span>
          </div>
        </div>
      </Link>
      <Link to="https://eloquent-java-script.vercel.app/" target="_blank">
        <div ref={item4} className="work-item">
          <div
            style={{ backgroundColor: "rgb(230, 18, 255)" }}
            className="work-item-info"
          >
            <h2>Eloquent Javascript Exercises</h2>
            <span
              style={{ color: "white" }}
              className="material-symbols-outlined"
            >
              arrow_forward
            </span>
          </div>
        </div>
      </Link>
      <Link to="https://franos-website.vercel.app/" target="_blank">
        <div ref={item5} className="work-item">
          <div
            style={{ backgroundColor: "rgb(215, 18, 255)" }}
            className="work-item-info"
          >
            <h2>Responsive Design Website</h2>
            <span
              style={{ color: "white" }}
              className="material-symbols-outlined"
            >
              arrow_forward
            </span>
          </div>
        </div>
      </Link>
      <Link to="https://arthas-menethil.vercel.app/" target="_blank">
        <div ref={item6} className="work-item">
          <div
            style={{ backgroundColor: "rgb(190, 18, 255)" }}
            className="work-item-info"
          >
            <h2>Arthas Menethil Tribute Page</h2>
            <span
              style={{ color: "white" }}
              className="material-symbols-outlined"
            >
              arrow_forward
            </span>
          </div>
        </div>
      </Link>
      <Link to="https://francwow.github.io/" target="_blank">
        <div ref={item7} className="work-item">
          <div
            style={{ backgroundColor: "rgb(170, 18, 255)" }}
            className="work-item-info"
          >
            <h2>My First Portfolio Website</h2>
            <span
              style={{ color: "white" }}
              className="material-symbols-outlined"
            >
              arrow_forward
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default WorkMobile;
