import { createContext, useState } from "react";
import React from "react";

const ThemeContext = createContext(undefined);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("DARK");
  const themeChangeHandler = () => {
    setTheme((prevTheme) => {
      return prevTheme === "DARK" ? "LIGHT" : "DARK";
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, themeChangeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
