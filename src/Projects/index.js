import React from "react";
import ProjectCard from "../ProjectCard";
import "./Projects.css";
import * as securesurf_img from "../images/secureSurf.png";
import * as warbler_img from "../images/Warbler_Demo.png";
import * as microblog_img from "../images/Microblog_demo.png";
import * as jobly_img from "../images/Jobly_demo.png";


function Projects() {

  const warbler = {
    title: "Warbler",
    description: "A twitter clone web app built using Python with Flask and SQLAlchemy.",
    image: warbler_img,
    link: "https://github.com/dogpineapple/warbler",
    demo: "https://olivia-and-diana.herokuapp.com/"
  }

  const microblog = {
    title: "Microblog",
    description: "A simple anonymous blog site created with React and Node.js",
    image: microblog_img,
    link: "https://github.com/hungale/react-microblog",
    demo: "https://microblog.diana-liang.com/"
  }

  const jobly = {
    title: "Job.ly",
    description: "A job application site built using React on the frontend and Node.js/Express, PostgreSQL on the backend.",
    image: jobly_img,
    link: "https://github.com/dogpineapple/react-jobly",
    demo: "https://jobly.diana-liang.com/"
  }

  const secureSurf = {
    title: "SecureSurf",
    description: "A browser security chrome browser extension and full-stack application. Created with JavaScript, Python, React.js, Flask, D3, Firebase RTD, and Firebase Auth",
    image: securesurf_img,
    link: "https://github.com/dedding4341/securesurf_frontend",
    demo: "http://securesurf.netlify.app/"
  }

  return (
    <div className="Projects">
      <h1 className="Projects-title">Projects</h1>
      <h4 className="Projects-description">
        Here are some of the projects that I have worked on during my time at Rithm School 
        with various technologies for both frontend and backend.
      </h4>
      <div className="Projects-container">
        <ProjectCard project={secureSurf} />
        <ProjectCard project={warbler} />
        <ProjectCard project={microblog} />
        <ProjectCard project={jobly} />
      </div>
    </div>
  );
};

export default Projects;