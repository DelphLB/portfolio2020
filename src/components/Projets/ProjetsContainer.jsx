import React, { useContext } from "react";

function ProjetsContainer(props) {
  return (
    <div className='ContainerP'>
      <img src={props.image} alt={props.name} className='ImageProjet' />
      <div className='DescriptionP'>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <a href={props.link} target='_blank'>
          Découvrir le projet
        </a>
      </div>
    </div>
  );
}
export default ProjetsContainer;
