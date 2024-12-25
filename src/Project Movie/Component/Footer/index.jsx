import React from "react";
import "./index.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__left">
          <h4>Prime 😊 Ahah</h4>
          <p>Your go-to place for the latest movies!</p>
        </div>

        <div className="footer__middle">
          <h5>Quick Links</h5>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
          </ul>
        </div>

        <div className="footer__right">
          <h5>Follow Us</h5>
          <ul className="social-links">
            <li>
              <a href="https://facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com">Twitter</a>
            </li>
            <li>
              <a href="https://instagram.com">Instagram</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; 2024 prime 😊 Ahah. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
