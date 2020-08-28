import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import "./Contact.css";

function Contact() {

  const github = "https://github.com/dogpineapple"
  const linkedin = "https://www.linkedin.com/in/liang-diana/"

  return (
    <div className="Contact">
      <h1 className="Contact-title">Let's keep in touch!</h1>
      <div className="Contact-container">
        <a href={github} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon></a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x"></FontAwesomeIcon></a>
        <a href ="mailto: diliang4783573@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} size="2x"></FontAwesomeIcon></a>
      </div>
    </div>
  );
};




export default Contact;