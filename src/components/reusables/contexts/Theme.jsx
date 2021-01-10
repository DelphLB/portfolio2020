import React, { useState } from "react";

export const ThemeContext = React.createContext([{}, () => {}]);

export const ThemeContextProvider = (props) => {
  const { children } = props;
  const [theme, setTheme] = useState("dark");

  function changeTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <ThemeContext.Provider value={[theme, changeTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
