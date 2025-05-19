import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-info">
            <h3 className="footer-logo">
              <span>ZAMAR</span> Solutions
            </h3>
            <p>
              An innovative experiential marketing and branding agency elevating
              businesses through strategic retail marketing, immersive
              activations, and distinctive branding solutions.
            </p>

            <div className="social-media-container">
              <h4>Connect With Us</h4>
              <div className="social-icons-modern">
                <a
                  href="https://www.facebook.com/share/1As5MStm7p/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="social-icon facebook"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/zamar-solutions-limited-025bbb34a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bp6Zs0s7JQQuPLO4l3KXAjQ%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="social-icon linkedin"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85274C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/zamar_solutions_limited?igsh=MTVwa3d3MnNjeWQwNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="social-icon instagram"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.001 6.50183C8.91692 6.50183 6.50391 8.91483 6.50391 12.0018C6.50391 15.0888 8.91692 17.5018 12.001 17.5018C15.0851 17.5018 17.4981 15.0888 17.4981 12.0018C17.4981 8.91483 15.0851 6.50183 12.001 6.50183ZM12.001 15.4188C10.0651 15.4188 8.58691 13.9437 8.58691 12.0018C8.58691 10.0599 10.0621 8.58483 12.001 8.58483C13.9399 8.58483 15.4151 10.0599 15.4151 12.0018C15.4151 13.9437 13.9369 15.4188 12.001 15.4188ZM18.5361 6.30183C18.5361 7.10355 17.8881 7.7485 17.0891 7.7485C16.2871 7.7485 15.6421 7.10057 15.6421 6.30183C15.6421 5.5031 16.2901 4.85516 17.0891 4.85516C17.8881 4.85516 18.5361 5.5031 18.5361 6.30183ZM22.0001 7.76683C21.9301 5.9658 21.5501 4.36381 20.2201 3.0371C18.8931 1.7104 17.2911 1.3304 15.4901 1.2574C13.6371 1.1724 8.36209 1.1724 6.50909 1.2574C4.71113 1.3274 3.10913 1.7074 1.77913 3.03412C0.449127 4.36083 0.0721265 5.96281 -0.000873566 7.76385C-0.0858736 9.61685 -0.0858736 14.8918 -0.000873566 16.7448C0.0691265 18.5458 0.449127 20.1478 1.77913 21.4745C3.10913 22.8012 4.70813 23.1812 6.50909 23.2542C8.36209 23.3392 13.6371 23.3392 15.4901 23.2542C17.2911 23.1842 18.8931 22.8042 20.2201 21.4745C21.5471 20.1478 21.9271 18.5458 22.0001 16.7448C22.0851 14.8918 22.0851 9.61983 22.0001 7.76683ZM19.6711 18.6918C19.3101 19.6168 18.5961 20.3307 17.6681 20.6948C16.2501 21.2428 12.7951 21.1278 12.001 21.1278C11.2071 21.1278 7.74909 21.2398 6.33409 20.6948C5.4091 20.3338 4.69511 19.6198 4.33111 18.6918C3.78309 17.2738 3.89809 13.8188 3.89809 12.0248C3.89809 10.2308 3.78607 6.77285 4.33111 5.35785C4.69211 4.43286 5.4061 3.71886 6.33409 3.35486C7.75209 2.80684 11.2071 2.92184 12.001 2.92184C12.7951 2.92184 16.2531 2.80982 17.6681 3.35486C18.5931 3.71586 19.3071 4.42986 19.6711 5.35785C20.2191 6.77585 20.1041 10.2308 20.1041 12.0248C20.1041 13.8188 20.2191 17.2768 19.6711 18.6918Z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@zamarsolutionslimited?_t=ZM-8vq6NJIbqP1&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="social-icon tiktok"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.6 5.82C15.9165 5.03962 15.5399 4.03743 15.54 3H12.45V15.4C12.4256 16.071 12.1563 16.7066 11.6984 17.1729C11.2404 17.6393 10.6302 17.9011 10 17.9C8.62 17.9 7.5 16.77 7.5 15.4C7.5 13.76 9.08 12.51 10.69 13.06V9.89C7.44 9.47 4.5 12.05 4.5 15.4C4.5 18.55 7.71 20.93 10.69 20.12C13.67 19.31 15.55 16.35 15.55 13.18V8.56C16.82 9.4 18.27 9.97 19.8 10.11V7C19.8 7 18.15 6.93 16.6 5.82Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/projects">Our Work</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Get In Touch</h4>
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.4371 20.0008C17.5871 20.0008 15.7371 19.5708 14.0371 18.7108C12.4371 17.9008 11.0071 16.8808 9.68713 15.5608C8.37713 14.2408 7.35713 12.8108 6.54713 11.2108C5.67713 9.49081 5.24713 7.64081 5.24713 5.81081C5.24713 5.12081 5.46713 4.44081 5.91713 3.88081C6.36713 3.32081 6.99713 3.00081 7.68713 3.00081H9.99713C10.9471 3.00081 11.7671 3.67081 11.9671 4.60081C12.0871 5.17081 12.2371 5.72081 12.4371 6.25081C12.6571 6.87081 12.5371 7.55081 12.1171 8.01081L11.3371 8.86081C12.0471 10.1908 12.9371 11.3308 13.9971 12.3608C15.0271 13.3908 16.1871 14.2708 17.4771 14.9708L18.3271 14.1908C18.8171 13.7308 19.5271 13.6108 20.1671 13.8608C20.6871 14.0608 21.2371 14.2108 21.8071 14.3308C22.7571 14.5408 23.3971 15.3908 23.3971 16.3608V18.5008C23.3971 19.2008 23.0771 19.8608 22.5171 20.3108C21.9571 20.7608 21.2971 21.0008 20.5971 21.0008C20.2071 21.0008 19.8171 20.9708 19.4371 20.9408V20.0008Z" />
                </svg>
              </div>
              <div className="contact-text">
                <p>+254 724 679 202</p>
                <p>+254 750 082 211</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19.6 8.25L12.53 12.67C12.21 12.87 11.79 12.87 11.47 12.67L4.4 8.25C4.15 8.09 4 7.82 4 7.53C4 6.86 4.73 6.46 5.3 6.81L12 11L18.7 6.81C19.27 6.46 20 6.86 20 7.53C20 7.82 19.85 8.09 19.6 8.25Z" />
                </svg>
              </div>
              <div className="contact-text">
                <p>sales@zamarsolutions.co.ke</p>
                <p>marketing@zamarsolutions.co.ke</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" />
                </svg>
              </div>
              <div className="contact-text">
                <p>Nairobi, Kenya</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.78 20 8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z" />
                </svg>
              </div>
              <div className="contact-text">
                <p>www.zamarsolutions.co.ke</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Zamar Solutions Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
