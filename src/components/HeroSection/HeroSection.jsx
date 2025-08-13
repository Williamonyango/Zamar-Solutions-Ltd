import React from "react";
import "./HeroSection.css";
import heroImg from "../../assets/images/hero6.jpeg";
import circleImg1 from "../../assets/images/hero6.jpeg";
import circleImg from "../../assets/images/hero.jpeg";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
      {/* Decorative circles */}
      {/* <img
        src={circleImg}
        alt="decorative"
        className="circle circle-top-right"
      /> */}
      <img
        src={circleImg}
        alt="decorative"
        className="circle circle-bottom-left"
      />

      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Building Brands,</h1>
        <p className="hero-subtitle">Empowering Teams</p>
        <div className="hero-buttons">
          <button
            href="#services"
            className="button1"
            onClick={() => navigate("/services")}
          >
            Our Services
          </button>
          <button
            className="button2"
            onClick={() => navigate("/contact")}
          >
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
