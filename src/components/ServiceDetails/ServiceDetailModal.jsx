import React from "react";
import "./ServiceDetailModal.css";

const ServiceDetailModal = ({ opened, onClose, service, category }) => {
  if (!opened || !service) return null;

  const {
    title,
    image,
    details = {},
    description,
  } = service;

  const {
    overview,
    whatWeDo = [],
    deliverables = [],
    industries = [],
    process = [],
    outcomes = [],
  } = details;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-title">
            <h3>{title}</h3>
            <span className="modal-category">{category}</span>
          </div>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="modal-body">
          {image && (
            <div className="modal-image">
              <img src={image} alt={title} />
            </div>
          )}

          <div className="modal-description">
            <p>{overview || description}</p>
          </div>

          {whatWeDo.length > 0 && (
            <div className="modal-section">
              <h4>What we do</h4>
              <ul className="modal-list">
                {whatWeDo.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {deliverables.length > 0 && (
            <div className="modal-section">
              <h4>Deliverables</h4>
              <ul className="modal-list deliverables">
                {deliverables.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {process.length > 0 && (
            <div className="modal-section">
              <h4>Our process</h4>
              <ul className="modal-list process">
                {process.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ul>
            </div>
          )}

          {outcomes.length > 0 && (
            <div className="modal-section">
              <h4>Expected outcomes</h4>
              <ul className="modal-list outcomes">
                {outcomes.map((outcome, idx) => (
                  <li key={idx}>{outcome}</li>
                ))}
              </ul>
            </div>
          )}

          {industries.length > 0 && (
            <div className="modal-section">
              <h4>Industries we serve</h4>
              <div className="modal-tags">
                {industries.map((industry, idx) => (
                  <span key={idx} className="modal-tag">
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button className="modal-btn modal-btn-secondary" onClick={onClose}>
            Close
          </button>
          <a 
            href={`/contact?service=${encodeURIComponent(title)}`}
            className="modal-btn modal-btn-primary"
          >
            Request a quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailModal;


