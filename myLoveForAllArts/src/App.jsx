import React, { useState } from "react";
import "./App.css";
import LightMuseumImage from "./assets/Museum.jpeg"; // Light mode image
import DarkMuseumImage from "./assets/MuseumDark.png"; // Dark mode image
import InfoBox from "./InfoBox";
// import ArtImage1 from "./assets/art1.jpg"; // Example art images
// import ArtImage2 from "./assets/art2.jpg";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // toggle between light and dark mode
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
