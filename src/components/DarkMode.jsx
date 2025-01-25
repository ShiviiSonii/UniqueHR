import React, { useState, useEffect } from "react";
import Sun from "../assets/sun.png"
import Moon from "../assets/moon.png"
const setDark = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

const DarkMode = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    return storedTheme || (prefersDark ? "dark" : "light");
  });

  useEffect(() => {
    // console.log("Applying theme:", theme);
    if (theme === "dark") {
      setDark();
    } else {
      setLight();
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    // console.log("Toggling theme to:", newTheme);
    setTheme(newTheme);
  };

  return (
    <div className="toggle-theme-wrapper">
      <div onClick={toggleTheme} id="theme-toggle">
        {theme === "light" ? (
          // <i className="fa-solid fa-sun">Sun</i> 
         <img src={Sun} height={20} width={20} alt="" />
        ) : (
          // <i className="fa-solid fa-moon">Moon</i>
          <img src={Moon} height={20} width={20} alt=""/>
        )}
      </div>
    </div>
  );
};

export default DarkMode;
