import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import MenuActiveContext from "./contexts/menuActiveContext";
import Icons from "./Icons";
import Footer from "./Footer";
import Boxes from "./Boxes";
import LanguageContext from "./contexts/languageContext";

const About = () => {
  const { menuActive } = useContext(MenuActiveContext);
  const { englishActive } = useContext(LanguageContext);
  const { ref: profileRef, inView: profileInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
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
          <Boxes />
          {englishActive ? (
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
          ) : (
            <div className="about-intro-info">
              <div className="about-intro-header">
                <h2>¡Hola Mundo!</h2>
              </div>
              <div className="about-intro-description">
                <p>
                  Me llamo Francisco Osorio Silva. Soy una persona aventurera,
                  amante de los animales, que se divierte corriendo y jugando
                  videojuegos. Disfruto mucho aprendiendo nuevas habilidades y
                  superando obstáculos.
                  <br></br>
                  <br></br>
                </p>
              </div>
            </div>
          )}

          <div ref={profileRef} className="about-intro-img">
            <div
              className={
                profileInView ? "desc-overlay imgShow" : "desc-overlay"
              }
            ></div>
            <img src="/profilepic.webp" alt="Francisco smiling" />
          </div>
        </div>
        <div className="about-hobbies">
          <Boxes inverted={true} />
          <div className="hobbies-info">
            <div className="hobbies-header">
              <h2>Otras cosas que disfruto</h2>
            </div>
            <div className="about-intro-description">
              <p>
                Amo trotar largas distancias en la mañana justo despues de mi
                primer café. Me encanta leer acerca de ciencia, psicología e
                interacciones humanas. Las personas son muy importantes para mi.
                Me gusta visitar a mis amigos y familiares cada vez que tengo la
                posibilidad.
              </p>
            </div>
          </div>
          <div ref={deskRef} className="about-intro-img">
            <div
              className={deskInView ? "desc-overlay imgShow" : "desc-overlay"}
            ></div>
            <img loading="lazy" src="/desk.webp" alt="office desk" />
          </div>
          <div className="about-intro-description">
            <p>
              He estado aprendiendo desarrollo front-end los últimos 12 meses.
              Me encanta todo acerca de este oficio. Desde el diseño del layout
              y la elección de los colores adecuados, hasta escribir DRY
              Javascript y clases significativas en CSS, disfruto mucho todo el
              proceso. Ha sido un viaje fantástico.
              <br></br>
              <br></br>
              Este año he tenido la oportunidad de trabajar en proyectos
              freelance para clientes reales y desarrollar ideas divertidas.
              Puedes encontrar todo mi trabajo <Link to="/work">aquí</Link>.
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
