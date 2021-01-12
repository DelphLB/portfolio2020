import React from "react";
import "../HomePage/home.css";
import { Link } from "react-router-dom";

function Links() {
  return (
    <div className='links'>
      <li>
        <Link to='/'>Accueil/></Link>
      </li>
      <li>
        <Link to='/projets'>Projets/></Link>
      </li>
      <li>
        <a
          href='https://www.linkedin.com/in/delphinelbn/'
          target='_blank'
          rel='noopener noreferrer'>
          Linkedin/>
        </a>
      </li>
      <li>
        <a
          href='https://github.com/DelphLB'
          target='_blank'
          rel='noopener noreferrer'>
          GitHub/>
        </a>
      </li>
    </div>
  );
}

export default Links;
