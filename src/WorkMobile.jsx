import { Link } from "react-router-dom";
import { workItems } from "./WorItems";

const WorkMobile = () => {
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
      {workItems.map((item) => {
        return (
          <Link
            key={item.id}
            style={{ "--i": item.id }}
            to={item.link}
            target="_blank"
          >
            <div className="work-item">
              <div style={itemStyle[item.id]} className="work-item-info">
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
          </Link>
        );
      })}
    </div>
  );
};

export default WorkMobile;
