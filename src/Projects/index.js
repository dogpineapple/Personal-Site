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

  const bloggies = {
    title: "Bloggies",
    description: "A blog posting site built developed primarily in TypeScript. Frontend uses React.ts, Redux, Bootstrap. Backend uses Node.ts, Expresss and, PostgreSQL.",
    image: "https://i.imgur.com/H9zAviG.png",
    link: "https://github.com/dogpineapple/onramp-fullstack-CRUD-project",
    demo: "https://bloggies.diana-liang.com/"
  }

  const tribe = {
    title: "Tribe",
    description: "A family task and points distribution web application. Frontend includes React.ts, TypeScript, Redux, Bootstrap. Backend uses Python, Flask, JWT, and AWS DynamoDB.",
    image: "https://i.imgur.com/1S11n8w.png",
    link: "https://github.com/dedding4341/tribe_frontend",
    demo: "https://www.tribeapp.family/"
  }

  const tackyboard = {
    title: "Tackyboard",
    description: "A personal idea board web application. Frontend includes JavaScript and React.js. Backend uses Python, Flask, JWT and PostgreSQL.",
    image: "https://i.imgur.com/menTNJc.png",
    link: "https://github.com/dedding4341/tribe_frontend",
    demo: "https://tackyboard.diana-liang.com/"
  }

  return (
    <div className="Projects">
      <h1 className="Projects-title">Projects</h1>
      <h4 className="Projects-description">
        Here are some of the projects that I have worked on during my time at Rithm School
        with various technologies for both frontend and backend.
      </h4>
      <div className="Projects-container">
        <ProjectCard project={tribe} />
        <ProjectCard project={bloggies} />
        <ProjectCard project={tackyboard} />
        <ProjectCard project={secureSurf} />
        <ProjectCard project={warbler} />
        <ProjectCard project={microblog} />
        <ProjectCard project={jobly} />
      </div>
    </div>
  );
};

export default Projects;