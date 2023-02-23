import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import MenuActiveContext from "./contexts/menuActiveContext";
import Icons from "./Icons";
import Footer from "./Footer";

const About = () => {
  const menuActive = useContext(MenuActiveContext);
  const { ref: profileRef, inView: profileInView } = useInView({
    threshold: 0.3,
  });
  const { ref: deskRef, inView: deskInView } = useInView({
    threshold: 0.3,
  });

  return (
    <div
      className={`main-section ${menuActive ? "move-left" : ""} invert-color`}
    >
      <div className="about-wrapper about-background">
        <div className="about-intro-container">
          <div className="about-intro-info">
            <div className="about-intro-header">
              <h2>Hello World!</h2>
            </div>
            <div className="about-intro-description">
              <p>
                My name is Francisco Osorio Silva. Im an adventure seeker,
                animal lover, running enthusiast and avid gamer, who enjoys
                learning and overcoming challenges.
                <br></br>
                <br></br>
              </p>
            </div>
          </div>
          <div ref={profileRef} className="about-intro-img">
            <div
              className={
                profileInView ? "desc-overlay imgShow" : "desc-overlay"
              }
            ></div>
            <img src="src/assets/profilepic.webp" alt="Francisco smiling" />
          </div>
        </div>
        <div className="about-hobbies">
          <div className="hobbies-info">
            <div className="hobbies-header">
              <h2>Other stuff I&apos;m into</h2>
            </div>
            <div className="about-intro-description">
              <p>
                I love to go for long runs in the morning right after my first
                coffee. I enjoy reading about sicence, psychology and human
                interactions. People are very important to me, I like to visit
                friends and family whenever I can.
              </p>
            </div>
          </div>
          <div ref={deskRef} className="about-intro-img">
            <div
              className={deskInView ? "desc-overlay imgShow" : "desc-overlay"}
            ></div>
            <img src="src/assets/desk.webp" alt="Francisco smiling" />
          </div>
          <div className="about-intro-description">
            <p>
              I&apos;ve been learning front-end development for the last 12
              months. I love everything about this craft, from designing the
              layout of a website and picking the right color composition, to
              writing DRY Javascript and meaningful CSS classes. I can&apos;t
              get enough of it. It&apos;s been a fantastic journey so far.
              <br></br>
              <br></br>
              I&apos;ve had the opportunity of working on freelance projects for
              real clients, and playing with fun personal ideas. You can find
              all my work <Link to="/work">here</Link>.
            </p>
          </div>
        </div>
        <div className="footer-wrapper">
          <Icons />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
