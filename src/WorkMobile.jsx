import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const WorkMobile = () => {
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

  return (
    <div className="work-container">
      <Link to="https://www.depositosanantonio.com/" target="_blank">
        <div
          ref={item1}
          className={item1InView ? "work-item item-expand" : "work-item"}
        >
          <img
            className={item1InView ? "img-expand" : null}
            src="/deposito.webp"
            alt="website from portfolio"
          />
        </div>
      </Link>
      <Link to="https://www.depositosanantonio.com/" target="_blank">
        <div
          ref={item2}
          className={item2InView ? "work-item item-expand" : "work-item"}
        >
          <img
            className={item2InView ? "img-expand" : null}
            src="/latiendo.webp"
            alt="website from portfolio"
          />
        </div>
      </Link>
      <Link to="https://www.depositosanantonio.com/" target="_blank">
        <div
          ref={item3}
          className={item3InView ? "work-item item-expand" : "work-item"}
        >
          <img
            className={item3InView ? "img-expand" : null}
            src="/flagFinder.webp"
            alt="website from portfolio"
          />
        </div>
      </Link>
      <Link to="https://www.depositosanantonio.com/" target="_blank">
        <div
          ref={item4}
          className={item4InView ? "work-item item-expand" : "work-item"}
        >
          <img
            className={item4InView ? "img-expand" : null}
            src="/eloquentjs.webp"
            alt="website from portfolio"
          />
        </div>
      </Link>
      <Link to="https://www.depositosanantonio.com/" target="_blank">
        <div
          ref={item5}
          className={item5InView ? "work-item item-expand" : "work-item"}
        >
          <img
            className={item5InView ? "img-expand" : null}
            src="/franos.webp"
            alt="website from portfolio"
          />
        </div>
      </Link>
      <Link to="https://www.depositosanantonio.com/" target="_blank">
        <div
          ref={item6}
          className={item6InView ? "work-item item-expand" : "work-item"}
        >
          <img
            className={item6InView ? "img-expand" : null}
            src="/arthas.webp"
            alt="website from portfolio"
          />
        </div>
      </Link>
      <Link to="https://www.depositosanantonio.com/" target="_blank">
        <div
          ref={item7}
          className={item7InView ? "work-item item-expand" : "work-item"}
        >
          <img
            className={item7InView ? "img-expand" : null}
            src="/fos.webp"
            alt="website from portfolio"
          />
        </div>
      </Link>
    </div>
  );
};

export default WorkMobile;
