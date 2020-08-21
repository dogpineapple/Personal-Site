import React from "react";
import ProjectCard from "../ProjectCard";
import "./Projects.css";

function Projects() {

  const warbler = {
    title: "Warbler",
    description: "A twitter clone web app built using Python with Flask and SQLAlchemy.",
    image: "https://www.continuumcolo.org/wp-content/uploads/2016/03/Image-Coming-Soon-Placeholder.png",
    link: "https://github.com/dogpineapple/warbler"
  }

  const microblog = {
    title: "Microblog",
    description: "A simple anonymous blog site created with React and Node.js",
    image: "https://i.imgur.com/bkwKhTt.jpg",
    link: "https://github.com/dogpineapple/react-microblog"
  }

  const shoply = {
    title: "Shop.ly",
    description: "A webstore app using React and Redux",
    image: "https://www.continuumcolo.org/wp-content/uploads/2016/03/Image-Coming-Soon-Placeholder.png",
    link: "https://github.com/dogpineapple/redux-shoply"
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
        <ProjectCard project={shoply} />
      </div>
    </div>
  );
};

export default Projects;