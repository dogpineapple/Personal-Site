import React from "react";
import Hero from "../Hero";
import "./Landing.css";
import Skills from "../Skills";

function Landing() {
  return (
    <div className="Landing">
      <div className="Landing-hero">
        <Hero />
      </div>
      <div className="Landing-divider">
          <span className="Landing-divider-line"></span>
      </div>
      <div className="Landing-skills">
        <Skills />
      </div>
    </div>
  )
}

export default Landing;