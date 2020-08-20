import React from "react";
import "./SkillCard.css";

function SkillCard({ skills }) {

  return (
    <div className="SkillCard">
      {skills.map(skill => <p key={skill} className="Skills-item">{skill}</p>)}
    </div>
  );
}


export default SkillCard;