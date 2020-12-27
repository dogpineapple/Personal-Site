import React from "react";

function SkillCard({ skills }) {

  return (
    <>
      {skills.map(skill => <td key={skill} className="SkillCard-item">{skill}</td>)}
    </>
  );
}


export default SkillCard;