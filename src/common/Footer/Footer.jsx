import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Reach out to us</h3>
          <p>
            <span role="img" aria-label="Phone">📞</span> +91 XXXXX XXXXX
          </p>
          <p>
            <span role="img" aria-label="Email">📧</span> contact@etechnoedu.org
          </p>
          <p>
            <span role="img" aria-label="Location">📍</span> India
          </p>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <p>About</p>
          <p>Contact</p>
          <p>Success</p>
        </div>
        <div className="footer-section">
          <h3>Legal</h3>
          <p>Privacy Policy</p>
          <p>Terms & Services</p>
          <p>Terms of Use</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <p>Donate Now</p>
          <p>Membership</p>
          <p>Our Mission</p>
        </div>
        <div className="footer-section newsletter">
          <h3>Join Our Newsletter</h3>
          <form>
            <input type="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </form>
          <p className="newsletter-text">
            * Will send you weekly updates for you to stay in touch with our progress.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
