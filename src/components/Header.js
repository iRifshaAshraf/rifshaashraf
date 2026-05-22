import { React, useRef } from 'react';
import hiImage from './hi.png';
import './Header.css';

const Header = () => {
  const homeRef = useRef(null);

  return (
    <header className="header active" id="home" ref={homeRef}>
      <div className="container header-content">
        <div className="h-shape"></div>
        <div className="row align-items-center">

          {/* Left — image + socials */}
          <div className="col-md-5 order-md-1 order-2">
            <div className="left-header">
              <div className="image">
                <img src={hiImage} alt="Rifsha Ashraf" className="img-fluid" />
                <div className="social-icons">
                  <h6>
                    <a href="https://github.com/iRifshaAshraf" target="_blank" rel="noreferrer">
                      <i className="fab fa-github" aria-hidden="true"></i>iRifsha Ashraf
                    </a>
                  </h6>
                  <h6>
                    <a href="https://www.linkedin.com/in/rifshaashraf/" target="_blank" rel="noreferrer">
                      <i className="fab fa-linkedin" aria-hidden="true"></i>rifsha.ashraf
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>

          {/* Right — intro text */}
          <div className="col-md-7 order-md-2 order-1 d-flex">
            <div className="right-header">
              <div className="text">
                <div className="intro">
                  <p className="intro-greeting">Bonjour! This is</p>
                  <h1>Rifsha Ashraf</h1>
                  <p className="intro-role">
                    <span className="role-tag">Frontend Developer</span>
                    <span className="role-divider">·</span>
                    <span className="role-tag">React · Next.js · WordPress</span>
                  </p>
                  <p className="intro-desc">
                    2+ years of professional experience building scalable,
                    responsive web applications across FinTech and e-commerce.
                  </p>
                  <div className="header-btns">
                    <a href="#contact" className="header-btn header-btn-primary">
                      Hire Me <i className="ti ti-arrow-right" aria-hidden="true"></i>
                    </a>
                    <a href="#my-portfolio" className="header-btn header-btn-outline">
                      View Work
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;