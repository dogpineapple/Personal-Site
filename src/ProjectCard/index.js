import React from "react";
import "./ProjectCard.css";


// media query 
function ProjectCard({ project }) {
  return (
    <div className="ProjectCard">
      <a className="ProjectCard-link" href={project.link} >
      <div className="ProjectCard-img">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="ProjectCard-title">{project.title}</div>
      </a>
      <div className="ProjectCard-description">{project.description}</div>
      <a className="ProjectCard-demo" href={project.demo}>Demo</a>
    </div>
  );
};

export default ProjectCard;