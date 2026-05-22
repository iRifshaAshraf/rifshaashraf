import React from 'react';
import './ContactMe.css';
import './Title.css';
import ContactImage from './cheerio.png';

const ContactMe = () => {
  return (
    <section className="contact mt-4 me-lg-5" id="contact">

      {/* Green polygon shape — right side */}
      <div className="h-shape"></div>

      <div className="container">
        <div className="section-title">
          <h2 className="title-heading hola">
            Contact <span>Me</span>
            <span className="line"></span>
            <h3 className="bg-text hola">Reach Me</h3>
          </h2>
        </div>

        <div className="contact-wrapper">

          {/* Left — Form */}
          <div className="contact-form-card">
            <div className="contact-card-header">
              <div className="contact-icon-wrap">
                <i className="ti ti-send" aria-hidden="true"></i>
              </div>
              <div>
                <p className="contact-card-label">Let's work together</p>
                <h5 className="contact-card-title">Send a Message</h5>
              </div>
            </div>
            <div className="contact-card-body">
              <form action="https://formspree.io/f/mjvnwopw" method="post">
                <div className="form-row-2">
                  <input type="text" name="name" placeholder="Full Name" className="contact-input" />
                  <input type="email" name="email" placeholder="Email Address" className="contact-input" />
                </div>
                <input type="text" name="subject" placeholder="Subject" className="contact-input" />
                <textarea
                  name="message"
                  placeholder="Your message..."
                  className="contact-input contact-textarea"
                  rows="5"
                ></textarea>
                <button type="submit" className="contact-submit-btn">
                  Send Message <i className="ti ti-arrow-right" aria-hidden="true"></i>
                </button>
              </form>
            </div>
          </div>

          {/* Right — Avatar + Info */}
          <div className="contact-right">

            {/* Full avatar image */}
            <div className="contact-avatar-wrap">
              <img src={ContactImage} alt="Rifsha Ashraf" className="contact-avatar" />
            </div>

            {/* Info list */}
            <div className="contact-info-list">
              <div className="info-item">
                <div className="info-icon">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </div>
                <div>
                  <p className="info-label">Email</p>
                  <p className="info-value">rifsha.ashraf1@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                </div>
                <div>
                  <p className="info-label">Location</p>
                  <p className="info-value">Karachi, Pakistan</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <i className="fab fa-github" aria-hidden="true"></i>
                </div>
                <div>
                  <p className="info-label">GitHub</p>
                  <a href="https://github.com/iRifshaAshraf" target="_blank" rel="noreferrer" className="info-link">
                    iRifshaAshraf
                  </a>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <i className="fab fa-linkedin" aria-hidden="true"></i>
                </div>
                <div>
                  <p className="info-label">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/rifshaashraf/" target="_blank" rel="noreferrer" className="info-link">
                    rifshaashraf
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;