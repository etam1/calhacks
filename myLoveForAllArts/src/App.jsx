import React, { useState } from "react";
import "./App.css";
import LightMuseumImage from "./assets/Museum.jpeg";
import DarkMuseumImage from "./assets/MuseumDark.png";
import Snail from "./assets/Snail.png";
import Magazine from "./assets/magazine.png";
import Fish from "./assets/fish.png";
import Book from "./assets/book.png";
import InfoBox from "./InfoBox";
// import ArtImage1 from "./assets/art1.jpg"; 
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

      <InfoBox
        title="Illustration"
        description="Fish"
        image={Fish}
      />
      <hr className="divider" />
      <InfoBox
        title="Animation"
        description="Shooting Snail - https://www.youtube.com/watch?v=deqK3hyqebQ&t=65s&ab_channel=UCBUGG"
        image={Snail}
      />
      <hr className="divider" />
      <InfoBox
        title="Graphic Design"
        description="Book"
        image={Book}
      />
      <hr className="divider" />
      <InfoBox
        title="Creative Embedded System"
        description="Magazine"
        image={Magazine}
      />
      <hr className="divider" />
    </div>
  );
};

export default App;
