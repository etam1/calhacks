// src/InfoBox.js
import React from "react";
import "./InfoBox.css"; // Add styles for better design

const InfoBox = ({ title, description, image }) => {
  return (
    <div className="info-box">
      <div className="info-text">
        <h2 className="info-title">{title}</h2>
        <p className="info-description">{description}</p>
      </div>
      {image && <img src={image} alt="Info" className="info-image" />}
    </div>
  );
};

export default InfoBox;