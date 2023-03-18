import LanguageContext from "./contexts/languageContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const IntroText = () => {
  const { englishActive } = useContext(LanguageContext);
  {
    return englishActive ? (
      <div className="about-intro-info">
        <div className="about-intro-header">
          <h2>Hello World!</h2>
        </div>
        <div className="about-intro-description">
          <p>
            My name is Francisco Osorio Silva. Im an adventure seeker, animal
            lover, running enthusiast and avid gamer, who enjoys learning and
            overcoming challenges.
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
            Me llamo Francisco Osorio Silva. Soy una persona aventurera, amante
            de los animales, que se divierte corriendo y jugando videojuegos.
            Disfruto mucho aprendiendo nuevas habilidades y superando
            obstáculos.
          </p>
        </div>
      </div>
    );
  }
};

export const HobbiesText = () => {
  const { englishActive } = useContext(LanguageContext);
  {
    return englishActive ? (
      <div className="hobbies-info">
        <div className="hobbies-header">
          <h2>A lovely day in Francisco&apos;s life</h2>
        </div>
        <div className="about-intro-description">
          <p>
            I love go for a run early in the morning after my first coffee. I
            also like to read about science, psychology and human interactions.
            People are very important to me, I visit friends and family whenever
            I can.
          </p>
        </div>
      </div>
    ) : (
      <div className="hobbies-info">
        <div className="hobbies-header">
          <h2>Otras cosas que disfruto</h2>
        </div>
        <div className="about-intro-description">
          <p>
            Amo trotar largas distancias en la mañana justo despues de mi primer
            café. Me encanta leer acerca de ciencia, psicología e interacciones
            humanas. Las personas son muy importantes para mi, me gusta visitar
            a mis amigos y familiares cada vez que tengo la posibilidad.
          </p>
        </div>
      </div>
    );
  }
};

export const WorkText = () => {
  const { englishActive } = useContext(LanguageContext);

  {
    return englishActive ? (
      <div className="about-intro-description">
        <p>
          I&apos;ve been learning front-end development for the last 12 months.
          I love everything about this craft, from designing the layout of a
          website and picking the right color composition, to writing DRY
          Javascript and meaningful CSS classes. I can&apos;t get enough of it.
          It&apos;s been a fantastic journey so far.
          <br></br>
          <br></br>
          I&apos;ve had the opportunity of working on freelance projects for
          real clients, and playing with fun personal ideas. You can find all my
          work <Link to="/work">here</Link>.
        </p>
      </div>
    ) : (
      <div className="about-intro-description">
        <p>
          He estado aprendiendo desarrollo front-end los últimos 12 meses. Me
          encanta todo acerca de este oficio. Desde el diseño del layout y la
          elección de los colores adecuados, hasta escribir DRY Javascript y
          clases significativas en CSS, disfruto mucho todo el proceso. Ha sido
          un viaje fantástico.
          <br></br>
          <br></br>
          Este año he tenido la oportunidad de trabajar en proyectos freelance
          para clientes reales y desarrollar ideas divertidas. Puedes encontrar
          todo mi trabajo <Link to="/work">aquí</Link>.
        </p>
      </div>
    );
  }
};
