import React from "react";
import * as dianaPortrait from "../images/dianaportrait.jpg";
import "./Hero.scss";

function Hero() {
  return (
    <div className="Hero container">
      <div className="Hero-intro row">
        <div className="col-5">
        <p className="Hero-greeting typewriter">Hello!</p> 
        <p className="Hero-self">
          I'm Diana, a Fullstack Software Engineer.
          <br/>
          From San Francisco, California <span role="img" aria-label="waterwave">🌊</span>
        </p>
        </div>
        <img className="Hero-image col-5" src={dianaPortrait} alt="portrait" />
        <div className="Hero-image-square"/>
      </div>
    </div>
  )
}


export default Hero;