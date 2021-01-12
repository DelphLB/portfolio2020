import React, { useContext } from "react";
import "./home.css";

import ThemeButton from "../reusables/contexts/ThemeButton";
import Presentation from "./Presentation";
import Links from "../reusables/Links";
import { ThemeContext } from "../reusables/contexts/Theme";

function Home() {
  const [theme] = useContext(ThemeContext);
  return (
    <div className={theme}>
      <div className='home'>
        <ThemeButton />
        <Presentation />
        <Links />
      </div>
    </div>
  );
}

export default Home;
