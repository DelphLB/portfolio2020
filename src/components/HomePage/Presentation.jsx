import React from "react";
import "./home.css";
import logo from "../../assets/logo.png";

function Presentation() {
  return (
    <div className='presentation'>
      <img src={logo} alt='logo' />

      <div className='presentationText'>
        <h1>Bonjour, bienvenue</h1>
        <h2>Je m'appelle Delphine</h2>
        <p> Développeuse FullStack React/Node.js /> </p>
      </div>

      {/* <img src='https://sdk.bitmoji.com/render/panel/88e9bc51-35da-49e1-a9b6-e76f28575f3f-d5fc51d7-074f-4163-9bbb-1d7340b704ee-v1.png?transparent=1&palette=1' /> */}
    </div>
  );
}

export default Presentation;
