import React from 'react';
import './ContactMe.css';
import ContactImage from './cheerio.png';
// import { useForm, ValidationError } from '@formspree/react';

const ContactMe = () => {
  // const [state, handleSubmit, reset] = useForm("mjvnwopw");

  // if (state.succeeded) {
  //   reset();
  //   alert("Thanks for contacting me, I will reach you soon");
  // }

  return (
    <section className="contact" id="contact">
      <div className="section-title">
        <h2 className="title-heading hola">
          Contact <span>Me</span>
          <span className="line"></span>
          <h3 className="bg-text hola">Reach me</h3>
        </h2>
      </div>
      <div className="container">
        <div className="h-shape"></div>
        <div className="contact-me">
          <div className="row">
            <div className="col-md-8">
              <div className="left-contact">
                <form action="https://formspree.io/f/mjvnwopw" method="post" className="form-box">
                  <input type="text" name="name" placeholder="Full Name" className="form-control" />
                  <input type="email" name="email" placeholder="Email" className="form-control" />
                  <input type="text" name="subject" placeholder="Subject" className="form-control" />
                  <textarea className="form-control" name="message" placeholder="Message" rows="" />
                  {/* <ValidationError prefix="Email" field="email" errors={state.errors} />
                  <ValidationError prefix="Message" field="message" errors={state.errors} /> */}
                  <button type="submit" className='main-btn'>
                    Send
                  </button>
                </form>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="right-contact">
                <div className="cheerio">
                  <img src={ContactImage} className="img-fluid" alt="" />
                  <div className="text-contact">
                    <h6><i className="fa fa-address-card" aria-hidden="true"></i>Rifsha Ashraf</h6>
                    <h6><i className="fa fa-envelope" aria-hidden="true"></i>rifsha.ashraf1@gmail.com</h6>
                    <h6><i className="fas fa-map-marker-alt" aria-hidden="true"></i>Karachi, Pakistan</h6>
                  </div>
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
