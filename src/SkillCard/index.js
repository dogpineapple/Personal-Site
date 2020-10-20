import React from "react";
import "./SkillCard.css";

function SkillCard({ skills }) {

  return (
    <>
      {skills.map(skill => <td key={skill} className="SkillCard-item">{skill}</td>)}
    </>
  );
}


export default SkillCard;