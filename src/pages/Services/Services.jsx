import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import "./Services.css";
import servicesImage from "../../assets/images/services.jpg";
import ProcessStepCard from "../../components/Process/ProcessStepCard";
import processSteps from "../../data/processSteps";
import processImage from "../../assets/images/process.jpg";
import { services } from "../../data/Services";
import ServiceDetailModal from "../../components/ServiceDetails/ServiceDetailModal";

const Services = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [activeService, setActiveService] = React.useState(null);
  const [activeCategory, setActiveCategory] = React.useState("");

  const openModal = (service, category) => {
    setActiveService(service);
    setActiveCategory(category);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveService(null);
    setActiveCategory("");
  };

  return (
    <motion.div className="services-page">
      <motion.section
        className="services-hero"
        style={{ backgroundImage: `url(${servicesImage})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <div className="container">
          <h1 className="hero-heading">
            We Offer the Best in Branding and Activation Services
          </h1>
          <p className="hero-description">
            Zamar Solutions Ltd is a leading experiential marketing agency in
            Eastern Africa, delivering exceptional branding services, staff
            outsourcing, and strategic marketing solutions. We specialize in
            brand activations, retail marketing, printing solutions, strategic
            branding, and staffing services, combining innovative thinking,
            flawless execution, and a results-driven approach to every
            campaign.At Zamar, we bring brands to life—connecting them
            meaningfully with their audiences and creating lasting impact.
          </p>
          <div className="hero-buttons">
            <button
              onClick={() => {
                const servicesMainSection =
                  document.querySelector(".services-main");
                if (servicesMainSection) {
                  servicesMainSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="button1"
            >
              Explore More
            </button>
            <button className="button2" onClick={() => navigate("/contact")}>
              Request a quote
            </button>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section services-main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeInOut", delay: 0.2 }}
      >
        <div className="container">
          <h2 className="section-title">Our Services</h2>

          {services.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="service-category"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.2,
                ease: "easeInOut",
              }}
            >
              <div className="category-header">
                <h3 className="category-title">{`${categoryIndex + 1}. ${
                  category.category
                }`}</h3>
              </div>

              <div className="subcategories-grid">
                {category.subcategories.map((subcategory, subIndex) => (
                  <motion.div
                    key={subIndex}
                    className="subcategory-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.2 + subIndex * 0.1,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      y: -8,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <div className="subcategory-image-container">
                      <img
                        src={subcategory.image}
                        alt={subcategory.title}
                        className="subcategory-image"
                      />
                      <div className="subcategory-overlay">
                        <div className="subcategory-icon">
                          <i className={subcategory.icon}></i>
                        </div>
                      </div>
                    </div>
                    <div className="subcategory-content">
                      <h4 className="subcategory-title">{subcategory.title}</h4>
                      <p className="subcategory-description">
                        {subcategory.description}
                      </p>
                      <button
                        className="button1 subcategory-cta"
                        onClick={() =>
                          openModal(subcategory, category.category)
                        }
                        aria-label={`View details for ${subcategory.title}`}
                      >
                        View details
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="section service-process"
        style={{ backgroundImage: `url(${processImage})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeInOut", delay: 0.4 }}
      >
        <div className="container">
          <h2 className="section-title1">Our Process</h2>
          <div className="process-steps">
            {processSteps.map((stepData, index) => (
              <ProcessStepCard key={index} {...stepData} />
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section cta-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeInOut", delay: 0.6 }}
      >
        <div className="container">
          <div className="cta-content">
            <h2>Ready to transform your brand experience?</h2>
            <p>
              Contact us today to discuss how our services can help achieve your
              marketing goals.
            </p>
            <a href="/contact" className="button1">
              Get In Touch
            </a>
          </div>
        </div>
      </motion.section>

      <ServiceDetailModal
        opened={modalOpen}
        onClose={closeModal}
        service={activeService}
        category={activeCategory}
      />
    </motion.div>
  );
};

export default Services;
