import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer me-lg-5">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-left">
            <p className="footer-name">Rifsha Ashraf</p>
            <p className="footer-role">Full Stack Developer · MERN Stack</p>
          </div>

          <div className="footer-links">
            <a
              href="https://github.com/iRifshaAshraf"
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
              aria-label="GitHub"
            >
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/rifshaashraf/"
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" aria-hidden="true"></i>
            </a>
            <a
              href="mailto:rifsha.ashraf1@gmail.com"
              className="footer-icon"
              aria-label="Email"
            >
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Rifsha Ashraf. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
