import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";

import "./style.scss";
const Home = () => {
  const navigate = useNavigate();

  const handleClicktoPages = () => {
    navigate("/contact");
  };
  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hi, I'm <span className="jobs">Agung,</span>
          <br />a Support Engineer.
        </h1>
      </div>
      <Animate
        play
        duration={2}
        delay={0.7}
        start={{
          transform: "translateY(551px)",
        }}
        end={{
          transform: "translateY(0)",
        }}
        easeType="ease-in-out"
      >
        <div className="home__contact-me">
          <button className="glow-on-hover" onClick={handleClicktoPages}>Hire Me!</button>
        </div>

        <div>
          
        </div>


      </Animate>
    </section>
  );
};

export default Home;
