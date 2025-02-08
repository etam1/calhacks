import React from "react";
import "./App.css";
import MuseumImage from "./assets/Museum.jpeg"; // If kept in src/assets

const App = () => {
  return (
    <div className="container">
      <img src={MuseumImage} alt="Museum" className="museum-image" />
    </div>
  );
};

export default App;
