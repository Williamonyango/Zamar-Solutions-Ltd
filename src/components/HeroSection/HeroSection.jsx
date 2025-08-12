import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="hero-container">
        <div className="hero-content">
          <h1>Building Brands, Empowering Teams</h1>
          <p className="hero-subtitle">
            Zamar Solutions is a leading experiential marketing and branding
            agency with more than 7 years of expertise in retail marketing,
            brand activations, and transformative digital experiences.
          </p>
          <div className="hero-buttons">
            <Link to="/services" className="btn btn-primary">
              Explore Services
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
