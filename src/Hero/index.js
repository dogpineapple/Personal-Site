import React from "react";
import * as waterRight from "../images/water-right.png";
import "./Hero.css";


function Hero() {
  return (
    <div className="Hero">
      <div className="Hero-intro">
        <p className="Hero-greeting">Hello!</p> 
        <p className="Hero-self">
          I'm Diana, a Fullstack Software Engineer.
          <br/>
          From San Francisco, California <span role="img" aria-label="waterwave">🌊</span>
        </p>
      </div>
      <div className="Hero-image-container">
        <img className="Hero-image" src={waterRight} alt="waterFfxiv" />
      </div>
    </div>
  )
}


export default Hero;