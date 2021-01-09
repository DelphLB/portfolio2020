import React, { useState, useContext } from "react";
import "./themebutton.css";
import { ThemeContext } from "./Theme";

export default function Toolbar() {
  const [theme, changeTheme] = useContext(ThemeContext);
  const [isOn, setIsOn] = useState(false);
  const handleChange = () => {
    changeTheme();
    setIsOn(!isOn);
  };

  function ToggleKnob() {
    return (
      <span
        className={`toggleKnob 
                      ${theme === "dark" ? "isActive" : ""}`}>
        &nbsp;
      </span>
    );
  }

  return (
    <div className='mode'>
      <div className='theme'>
        {theme === "dark" ? "light mode ?" : "dark mode ?"}
        <button
          type='button'
          className={`toggleContainer ${theme === "dark" ? "isActive" : ""}`}
          onClick={() => handleChange()}
          defaultValue={theme}>
          <ToggleKnob />
        </button>
      </div>
    </div>
  );
}
