import React from "react";
import "./Skills.css";
import SkillCard from "../SkillCard";

function Skills() {
  const languages = ["JavaScript", "Python", "HTML", "Swift"]
  const libraries = ["React", "Redux", "jQuery"]
  const frameworks = ["Express.js", "Flask", "Jest", "React Testing Library"]
  const databases = ["PostgreSQL", "MySQL"]

  // fix the layout cause it's so everywhere.. 
  return (
    <div className="Skills">
      <h1 className="Skills-title">
        <p>Skills</p>
      </h1>
      <div className="Skills-listing">
        <div className="Skills-category">
          <span>Programming Languages</span>
          <SkillCard skills={languages} />
        </div>
        <div className="Skills-category">
          <span>Libraries</span>
          <SkillCard skills={libraries} />
        </div>
        <div className="Skills-category">
          <span>Frameworks</span>
          <SkillCard skills={frameworks} />
        </div>
        <div className="Skills-category">
          <span>Databases</span>
          <SkillCard skills={databases} />
        </div>
      </div>

    </div>
  );
};

export default Skills;