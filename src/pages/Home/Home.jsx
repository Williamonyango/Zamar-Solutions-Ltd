import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "zustand/react";
import DynamicContentStore from "../../libs/dynamic_content";
import HeroSection from "../../components/HeroSection/HeroSection";
import ValueCard from "../../components/CoreSection/ValueCard";
import { Title } from "@mantine/core";
import axios from "axios";

// Import icons for Why Choose Us section
import expertiseIcon from "/icons/expertise.svg";
import innovationIcon from "/icons/innovation.svg";
import qualityIcon from "/icons/quality.svg";
import supportIcon from "/icons/support.svg";

import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [clients, setClients] = React.useState([]);
  const [loading, setLoading] = useState(true);
  const [activeValueIndex, setActiveValueIndex] = useState(0);
  const valuesRowRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Check if the screen is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch client logos
  useEffect(() => {
    const clientLogos = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://adminserver.zamarsolutions.co.ke/images"
        );
        const items = Array.isArray(response.data) ? response.data : [];
        const filtered = items.filter((item) => item.category === "Client");
        setClients(filtered);
      } catch (error) {
        console.error("Error fetching client logos:", error);
      } finally {
        setLoading(false);
      }
    };
    clientLogos();
  }, []);

  const store = useStore(DynamicContentStore);

  // Initialize sample values
  useEffect(() => {
    const sampleValues = [
      {
        id: "1",
        title: "Vision",
        description:
          "<p>To be the most trusted and creative experiential marketing and branding partner in Africa transforming how brands engage, inspire, and grow.</p>",
      },
      {
        id: "2",
        title: "Mission",
        description:
          "<p>To empower brands through innovative experiential marketing and strategic branding solutions that create meaningful connections, memorable experiences, and measurable impact.</p>",
      },
      {
        id: "3",
        title: "Core Values",
        description:
          "<p>We value transparency, teamwork, and technology-driven excellence in all we do.</p>",
      },
    ];
    DynamicContentStore.getState().fill("values", sampleValues);
  }, []);

  const values = [...store.values.values()];

  // Scroll to specific value card - only active in mobile mode
  const scrollToValueCard = (index) => {
    if (isMobile && valuesRowRef.current) {
      const cards = valuesRowRef.current.querySelectorAll(
        ".value-card-wrapper"
      );
      if (cards[index]) {
        cards[index].scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
        setActiveValueIndex(index);
      }
    }
  };

  // Handle values carousel scroll - only in mobile mode
  const handleValuesScroll = () => {
    if (isMobile && valuesRowRef.current) {
      const scrollLeft = valuesRowRef.current.scrollLeft;
      const cardWidth =
        valuesRowRef.current.querySelector(".value-card-wrapper")
          ?.offsetWidth || 0;
      const gap = 16;
      const newIndex = Math.round(scrollLeft / (cardWidth + gap));
      if (
        newIndex !== activeValueIndex &&
        newIndex >= 0 &&
        newIndex < values.length
      ) {
        setActiveValueIndex(newIndex);
      }
    }
  };

  // Loading Spinner Component
  const LoadingSpinner = () => (
    <div className="spinner-container">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="spinner-text">Loading clients...</div>
    </div>
  );

  return (
    <div className="home-container">
      <HeroSection />

      <section className="section core-section">
        <div className="container">
          <h2 className="section-title">At Our Core</h2>
          <div className="carousel-container">
            {isMobile && (
              <div className="nav-buttons values-nav-buttons">
                <button
                  className="nav-btn prev-btn"
                  onClick={() => scrollToValueCard(activeValueIndex - 1)}
                  disabled={activeValueIndex === 0}
                >
                  ←
                </button>
                <button
                  className="nav-btn next-btn"
                  onClick={() => scrollToValueCard(activeValueIndex + 1)}
                  disabled={activeValueIndex === values.length - 1}
                >
                  →
                </button>
              </div>
            )}

            <div
              className="values-row carousel"
              ref={valuesRowRef}
              onScroll={isMobile ? handleValuesScroll : undefined}
            >
              {values.map((value) => (
                <div key={value.id} className="value-card-wrapper">
                  <ValueCard value={value} />
                </div>
              ))}
            </div>

            {isMobile && (
              <div className="indicators values-indicators">
                {values.map((_, index) => (
                  <div
                    key={index}
                    className={`indicator ${
                      index === activeValueIndex ? "active" : ""
                    }`}
                    onClick={() => scrollToValueCard(index)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="section services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-text-grid">
            <div className="service-text-card">
              <h3>Activations</h3>
              <p>
                Roadshows, merchandising, promotions, market storms,
                exhibitions, and seeding. We bring your brand to life with
                impactful experiential campaigns that engage your audience
                directly.
              </p>
            </div>
            <div className="service-text-card">
              <h3>Branding</h3>
              <p>
                Instore and outdoor branding solutions tailored to amplify your
                brand presence, enhance visibility, and create a lasting
                impression.
              </p>
            </div>
          </div>
          <div className="view-more-container">
            <button
              className="btn btn-large"
              onClick={() => navigate("/services")}
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section clients-section">
        <div className="container">
          <h2 className="section-title">Our Clients</h2>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <div className="clients-grid">
              {clients.map((client, index) => (
                <div key={index} className="client-logo">
                  <img src={client.image_URL} alt={client.name} />
                </div>
              ))}
              {clients.map((client, index) => (
                <div key={`dup-${index}`} className="client-logo">
                  <img src={client.image_URL} alt={client.name} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us-section">
        <div className="why-us-container">
          <h2 className="why-us-title">Why Choose Us</h2>
          <div className="why-us-grid">
            <div className="why-us-card">
              <div className="why-icon-container">
                <img src={expertiseIcon} alt="Expertise" className="why-icon" />
              </div>
              <h3>Expertise</h3>
              <p>
                Our team of experienced professionals brings years of industry
                knowledge to every project.
              </p>
            </div>
            <div className="why-us-card">
              <div className="why-icon-container">
                <img
                  src={innovationIcon}
                  alt="Innovation"
                  className="why-icon"
                />
              </div>
              <h3>Innovation</h3>
              <p>
                We stay ahead of the curve with cutting-edge technology and
                creative solutions.
              </p>
            </div>
            <div className="why-us-card">
              <div className="why-icon-container">
                <img src={qualityIcon} alt="Quality" className="why-icon" />
              </div>
              <h3>Quality</h3>
              <p>
                We maintain the highest standards of quality in all our products
                and services.
              </p>
            </div>
            <div className="why-us-card">
              <div className="why-icon-container">
                <img src={supportIcon} alt="Support" className="why-icon" />
              </div>
              <h3>Support</h3>
              <p>
                Our dedicated support team is always ready to assist you with
                any queries or issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to elevate your brand presence?</h2>
            <p>
              Get in touch with us today and let's create impactful marketing
              solutions together.
            </p>
            <Link to="/contact" className="btn">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
