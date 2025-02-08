import React, { useState } from "react";
import "./App.css";
import LightMuseumImage from "./assets/Museum.jpeg"; // Light mode image
import DarkMuseumImage from "./assets/MuseumDark.png"; // Dark mode image

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // toggle btw light and dark mode
  const toggleMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="header">
        <h1 className="title">ETHAN TAM'S ART MUSEUM</h1>
        <button className="toggle-button" onClick={toggleMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <hr className="divider" />
      <img 
        src={darkMode ? DarkMuseumImage : LightMuseumImage} 
        alt="Museum" 
        className="museum-image"
      />
    </div>
  );
};

export default App;
