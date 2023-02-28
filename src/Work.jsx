import MenuActiveContext from "./contexts/menuActiveContext";
import LanguageContext from "./contexts/languageContext";
import { useContext, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "usehooks-ts";

const Work = () => {
  const contRef = useRef(null);
  const { menuActive } = useContext(MenuActiveContext);
  const { englishActive } = useContext(LanguageContext);
  const { ref: item1, inView: item1InView } = useInView({
    threshold: 0.9,
  });
  const { ref: item2, inView: item2InView } = useInView({
    threshold: 0.9,
  });
  const { ref: item3, inView: item3InView } = useInView({
    threshold: 0.9,
  });
  const { ref: item4, inView: item4InView } = useInView({
    threshold: 0.9,
  });
  const { ref: item5, inView: item5InView } = useInView({
    threshold: 0.9,
  });
  const { ref: item6, inView: item6InView } = useInView({
    threshold: 0.9,
  });
  const { ref: item7, inView: item7InView } = useInView({
    threshold: 0.9,
  });
  const matches = useMediaQuery("(max-width: 480px)");

  return (
    <div className={`main-section ${menuActive ? "move-left" : ""}`}>
      <div className="work-wrapper work-background">
        {matches ? (
          <div ref={contRef} className="work-container">
            <div
              ref={item1}
              className={item1InView ? "work-item item-expand" : "work-item"}
            ></div>
            <div
              ref={item2}
              className={item2InView ? "work-item item-expand" : "work-item"}
            ></div>
            <div
              ref={item3}
              className={item3InView ? "work-item item-expand" : "work-item"}
            ></div>
            <div
              ref={item4}
              className={item4InView ? "work-item item-expand" : "work-item"}
            ></div>
            <div
              ref={item5}
              className={item5InView ? "work-item item-expand" : "work-item"}
            ></div>
            <div
              ref={item6}
              className={item6InView ? "work-item item-expand" : "work-item"}
            ></div>
            <div
              ref={item7}
              className={item7InView ? "work-item item-expand" : "work-item"}
            ></div>
          </div>
        ) : (
          <div ref={contRef} className="work-container">
            <div
              ref={item1}
              className={item1InView ? "work-item item-expand" : "work-item"}
            ></div>
            <div
              ref={item2}
              className={item2InView ? "work-item item-expand" : "work-item"}
            ></div>
            <div
              ref={item3}
              className={item3InView ? "work-item item-expand" : "work-item"}
            ></div>
            <div
              ref={item4}
              className={item4InView ? "work-item item-expand" : "work-item"}
            ></div>
            <div
              ref={item5}
              className={item5InView ? "work-item item-expand" : "work-item"}
            ></div>
            <div
              ref={item6}
              className={item6InView ? "work-item item-expand" : "work-item"}
            ></div>
            <div
              ref={item7}
              className={item7InView ? "work-item item-expand" : "work-item"}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;
