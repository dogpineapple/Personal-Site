import React from "react";
import "./Skills.css";
import SkillCard from "../SkillCard";

function Skills() {
  const languages = ["JavaScript", "Python", "HTML", "Kotlin", "TypeScript"]
  const libraries = ["React", "Redux", "jQuery"]
  const frameworks = ["Express.js", "Flask", "Jest", "React Testing Library"]
  const databases = ["PostgreSQL", "MySQL"]

  // fix the layout cause it's so everywhere.. 
  return (
    <div className="Skills">
      <h1 className="Skills-title">
        <p>Skills</p>
      </h1>
      <div className="Skills-tablecontainer">
        <table className="Skills-table">
          <tbody>
            <tr>
              <th>Programming Languages</th>
              <SkillCard skills={languages} />
            </tr>
            <tr>
              <th>Libraries</th>
              <SkillCard skills={libraries} />
            </tr>
            <tr>
              <th>Frameworks</th>
              <SkillCard skills={frameworks} />
            </tr>
            <tr>
              <th>Databases</th>
              <SkillCard skills={databases} />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Skills;