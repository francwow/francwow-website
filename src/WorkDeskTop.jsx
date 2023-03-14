import { useState } from "react";
import { Link } from "react-router-dom";
import { workItems } from "./WorItems";

const WorkDeskTop = () => {
  const [onHover, setOnHover] = useState(false);

  const itemStyle = workItems.map((item) => {
    const style = {
      backgroundImage: `url(${item.imgsrc})`,
      backgroundPosition: "top",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundBlendMode: "overlay",
      backgroundColor: "var(--bg-color-cover)",
    };

    return style;
  });

  return (
    <div className="work-container">
      {workItems.map((item) => {
        return (
          <Link
            key={item.id}
            style={{ "--i": item.id }}
            to={item.link}
            target="_blank"
          >
            <div
              onMouseOver={() => setOnHover(true)}
              onMouseOut={() => setOnHover(false)}
              onFocus={() => setOnHover(true)}
              onBlur={() => setOnHover(false)}
              className={onHover ? "work-item" : "work-item hover-false"}
            >
              <div style={itemStyle[item.id]} className="work-item-info">
                <div className="item-info-container">
                  <div className="item-info">
                    <h2>{item.heading}</h2>
                    <span>{item.languages}</span>
                  </div>

                  <span
                    style={{ color: "white" }}
                    className="material-symbols-outlined"
                  >
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default WorkDeskTop;
