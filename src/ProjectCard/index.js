import React from "react";
import "./ProjectCard.css";


// media query 
function ProjectCard({ project }) {
  return (
    <div className="ProjectCard">
      <div className="ProjectCard-img">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="ProjectCard-title">{project.title}</div>
      <div className="ProjectCard-description">{project.description}</div>
      <a className="ProjectCard-link" target="_blank" rel="noopener noreferrer" href={project.demo}>Demo</a>
      <span> | </span>
      <a className="ProjectCard-link" href={project.link} target="_blank" rel="noopener noreferrer">Github</a>
    </div>
  );
};

export default ProjectCard;