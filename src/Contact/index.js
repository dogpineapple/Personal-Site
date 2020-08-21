import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import "./Contact.css";

function Contact() {

  const github = "https://github.com/dogpineapple"
  const linkedin = "https://www.linkedin.com/in/liang-diana/"

  return (
    <div className="Contact">
      <h1 className="Contact-title">Let's keep in touch!</h1>
      <div className="Contact-container">
        <a href={github}><FontAwesomeIcon icon={faGithub} size="3x"></FontAwesomeIcon></a>
        <a href={linkedin}><FontAwesomeIcon icon={faLinkedin} size="3x"></FontAwesomeIcon></a>
        <a href ="mailto: diliang4783573@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="3x"></FontAwesomeIcon></a>
      </div>
      {/* <div className="Contact-tele"><FontAwesomeIcon className="Contact-teleicon" icon={faPhone} /> 415-816-3646</div> */}
    </div>
  );
};

export default Contact;