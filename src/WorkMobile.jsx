import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { workItems } from "./WorItems";
import { useEffect } from "react";

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

  const itemStyle = workItems.map((item) => {
    const style = {
      backgroundImage: `url(${item.imgsrc})`,
      backgroundPosition: "top",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundBlendMode: "overlay",
      backgroundColor: "rgb(5, 5, 13, .9)",
    };

    return style;
  });

  return (
    <div className="work-container">
      <Link
        style={{ "--i": "0" }}
        to="https://www.depositosanantonio.com/"
        target="_blank"
      >
        <div ref={item1} className="work-item">
          <div style={itemStyle[0]} className="work-item-info">
            <div className="item-info">
              <h2>Depósito San Antonio Website</h2>
              <span>HTML | CSS</span>
            </div>

            <span
              style={{ color: "white" }}
              className="material-symbols-outlined"
            >
              arrow_forward
            </span>
          </div>
        </div>
      </Link>
      <Link
        style={{ "--i": "1" }}
        to="https://www.latiendo.co/"
        target="_blank"
      >
        <div ref={item2} className="work-item">
          <div style={itemStyle[1]} className="work-item-info">
            <div className="item-info">
              <h2>Latiendo Website</h2>
              <span>HTML | CSS | JavaScript</span>
            </div>

            <span
              style={{ color: "white" }}
              className="material-symbols-outlined"
            >
              arrow_forward
            </span>
          </div>
        </div>
      </Link>
      <Link
        style={{ "--i": "2" }}
        to="https://flag-finder.vercel.app/"
        target="_blank"
      >
        <div ref={item3} className="work-item">
          <div style={itemStyle[2]} className="work-item-info">
            <div className="item-info">
              <h2>Flag Finder Webapp</h2>
              <span>React | CSS</span>
            </div>

            <span
              style={{ color: "white" }}
              className="material-symbols-outlined"
            >
              arrow_forward
            </span>
          </div>
        </div>
      </Link>
      <Link
        style={{ "--i": "3" }}
        to="https://eloquent-java-script.vercel.app/"
        target="_blank"
      >
        <div ref={item4} className="work-item">
          <div style={itemStyle[3]} className="work-item-info">
            <div className="item-info">
              <h2>Eloquent Javascript Exercises</h2>
              <span>HTML | CSS | JavaScript</span>
            </div>

            <span
              style={{ color: "white" }}
              className="material-symbols-outlined"
            >
              arrow_forward
            </span>
          </div>
        </div>
      </Link>
      <Link
        style={{ "--i": "4" }}
        to="https://franos-website.vercel.app/"
        target="_blank"
      >
        <div ref={item5} className="work-item">
          <div style={itemStyle[4]} className="work-item-info">
            <div className="item-info">
              <h2>Responsive Design Website</h2>
              <span>HTML | CSS | JavaScript</span>
            </div>

            <span
              style={{ color: "white" }}
              className="material-symbols-outlined"
            >
              arrow_forward
            </span>
          </div>
        </div>
      </Link>
      <Link
        style={{ "--i": "5" }}
        to="https://arthas-menethil.vercel.app/"
        target="_blank"
      >
        <div ref={item6} className="work-item">
          <div style={itemStyle[5]} className="work-item-info">
            <div className="item-info">
              <h2>Arthas Menethil Tribute Page</h2>
              <span>HTML | CSS | JavaScript</span>
            </div>

            <span
              style={{ color: "white" }}
              className="material-symbols-outlined"
            >
              arrow_forward
            </span>
          </div>
        </div>
      </Link>
      <Link
        style={{ "--i": "6" }}
        to="https://francwow.github.io/"
        target="_blank"
      >
        <div ref={item7} className="work-item">
          <div style={itemStyle[6]} className="work-item-info">
            <div className="item-info">
              <h2>My First Portfolio Website</h2>
              <span>HTML | CSS</span>
            </div>

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
