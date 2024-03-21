import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css"; // Import the styles

const CelebrationScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("celebration-screen");
    return () => {
      document.body.classList.remove("celebration-screen");
    };
  }, []);

  const handleCelebrateClick = () => {
    navigate("/bulbs");
  };

  return (
    <div className="containernpm install --save react-lazyload">
      <h1 className="header">
        Let Get Ready EveryBody to Celebrate Samju BirthDay
      </h1>
      <div className="button-container">
        <button className="button" onClick={handleCelebrateClick}>
          Can you turn the Lights please
        </button>
      </div>
    </div>
  );
};

export default CelebrationScreen;
