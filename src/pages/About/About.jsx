import React from "react";
import "../../index.css";
import "./About.css";
import aboutImage from "../../assets/images/nairobi.jpg";
import aboutCompanyImage from "../../assets/images/about.jpeg";
import companyProfile from "../../assets/documents/company-profile.pdf";
import impactImage from "../../assets/images/impact.jpg";
import impactData from "../../data/impactData";
import ImpactCard from "../../components/impact/ImpactCard";

const About = () => {
  return (
    <div className="about-page">
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${aboutImage})` }}
      >
        <div className="container">
          <h1 className="hero-heading">Who We Are</h1>
          <p className="hero-description">
            At Zamar Solutions Ltd, we are a dynamic experiential marketing
            agency that specializes in creating impactful brand experiences. We
            offer a blend of branding solutions and staff outsourcing services,
            helping businesses connect with their target audiences in meaningful
            and results-driven ways. With a focus on engagement, visibility, and
            execution excellence, Zamar Solutions delivers tailor-made campaigns
            and workforce solutions that drive brand growth and market presence.
          </p>
        </div>
      </section>

      <section className="section about-company">
        <div className="container">
          <div className="company-info">
            <div className="company-content">
              <h2 className="section-title">About Zamar</h2>
              <p>
                Zamar Solutions Limited is a leading experiential marketing and
                branding agency specializing in both in-store and outdoor
                activations. With over 7 years of experience, we have built a
                solid reputation for delivering innovative and impactful
                marketing solutions that help our clients connect with their
                audiences in meaningful and measurable ways.
              </p>
              <p>
                Our expertise spans strategic consulting, retail marketing,
                brand activations, and comprehensive branding services. We are
                passionate about creating memorable experiences that bring
                brands to life and drive real results.
              </p>
              <a
                href={companyProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="button1"
              >
                Company Profile
              </a>
            </div>
            <div className="company-image">
              <img src={aboutCompanyImage} alt="Zamar Solutions Team" />
            </div>
          </div>
        </div>
      </section>
      {/* mission section */}
      <section className="section mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-box">
              <h3>Our Mission</h3>
              <p>
                To empower brands through innovative experiential marketing and
                strategic branding solutions that create meaningful connections,
                memorable experiences, and measurable impact.
              </p>
            </div>
            <div className="vision-box">
              <h3>Our Vision</h3>
              <p>
                To be the most trusted and creative experiential marketing and
                branding partner in Africa—transforming how brands engage,
                inspire, and grow
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* impact section */}
      <section
        className="section impact-section"
        style={{ backgroundImage: `url(${impactImage})` }}
      >
        <div className="container">
          <h2
            className="sub-section-heading"
            style={{
              color: "white",
              textAlign: "center",
              lineHeight: "1.9rem",
            }}
          >
            Our Impact
          </h2>
          <p
            className="section-description"
            style={{ color: "white", textAlign: "center" }}
          >
            Empowering brands with innovative activations and strategic branding
            solutions across Kenya, Rwanda, Uganda, Tanzania, and South Sudan.
          </p>
          <div className="impact-grid">
            {impactData.map((item, index) => (
              <ImpactCard
                key={index}
                number={item.number}
                suffix={item.suffix}
                heading={item.heading}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
