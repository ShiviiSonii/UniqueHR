import React, { useState, useEffect } from "react";

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
    // Initialize theme from localStorage or system preferences
    const storedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    return storedTheme || (prefersDark ? "dark" : "light");
  });

  // Apply theme on component mount or theme change
  useEffect(() => {
    if (theme === "dark") {
      setDark();
    } else {
      setLight();
    }
  }, [theme]);

  // Toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="toggle-theme-wrapper">
      <button onClick={toggleTheme} id="theme-toggle">
        {theme == "dark" ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default DarkMode;
