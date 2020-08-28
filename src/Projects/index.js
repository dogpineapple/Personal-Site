import React from "react";
import ProjectCard from "../ProjectCard";
import "./Projects.css";

function Projects() {

  const warbler = {
    title: "Warbler",
    description: "A twitter clone web app built using Python with Flask and SQLAlchemy.",
    image: "https://i.imgur.com/wwV9tvN.png",
    link: "https://github.com/dogpineapple/warbler",
    demo: "https://olivia-and-diana.herokuapp.com/"
  }

  const microblog = {
    title: "Microblog",
    description: "A simple anonymous blog site created with React and Node.js",
    image: "https://i.imgur.com/tPAiatz.png",
    link: "https://github.com/hungale/react-microblog",
    demo: "https://microblog.diana-liang.com/"
  }

  const jobly = {
    title: "Job.ly",
    description: "A job application site built using React on the frontend and Node.js/Express, PostgreSQL on the backend.",
    image: "https://i.imgur.com/vpyZVQy.png",
    link: "https://github.com/dogpineapple/react-jobly",
    demo: "https://jobly.diana-liang.com/"
  }

  return (
    <div className="Projects">
      <h1 className="Projects-title">Projects</h1>
      <h4 className="Projects-description">
        Here are some of the projects that I have worked on during my time at Rithm School 
        with various technologies for both frontend and backend.
      </h4>
      <div className="Projects-container">
        <ProjectCard project={warbler} />
        <ProjectCard project={microblog} />
        <ProjectCard project={jobly} />
      </div>
    </div>
  );
};

export default Projects;