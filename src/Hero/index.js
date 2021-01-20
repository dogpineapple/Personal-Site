import React from "react";
import "./Hero.css";
import * as dianaPortrait from "../images/dianaportrait.jpg";


function Hero() {
  return (
    <div className="Hero">
      <div className="Hero-intro">
        <p className="Hero-greeting typewriter">Hello!</p> 
        <p className="Hero-self">
          I'm Diana, a Fullstack Software Engineer.
          <br/>
          From San Francisco, California <span role="img" aria-label="waterwave">🌊</span>
        </p>
      </div>
      <div className="Hero-image-container">
        <img className="Hero-image" src={dianaPortrait} alt="portrait" />
        <div className="Hero-image-square"/>
      </div>
    </div>
  )
}


export default Hero;