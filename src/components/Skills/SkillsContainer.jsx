import React from "react";

function SkillsContainer(props) {
  return (
    <div className='container-p'>
      <div className='description-p'>
        <h2>{props.name}</h2>
        <h3>{props.headline}</h3>
        <p>{props.description}</p>
        <p>{props.tools}</p>
      </div>
    </div>
  );
}
export default SkillsContainer;
