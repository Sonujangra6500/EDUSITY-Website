import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better edducation for a better world </h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge,skills,and experiences needed to excel in the dynamic filed
          of education
        </p>
        <button className="btn">
          Exlore more <img src={dark_arrow} alt="dark-arrow" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
