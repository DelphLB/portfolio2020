import React from "react";
import "./home.css";
import Theme from "./Theme";
import Presentation from "./Presentation";
import Links from "./Links";

function Home() {
  return (
    <div className='home'>
      <Theme />
      <Presentation />
      <Links />
    </div>
  );
}

export default Home;
