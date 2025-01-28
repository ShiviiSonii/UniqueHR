import React from 'react';
import Navbar from '../components/Navbar';
import AboveFooter from '../components/AboveFooter';
import Footer from '../components/Footer';
import CommonBanner from '../components/CommonBanner';
import "../styles/Contact.css";
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <>
      <Navbar />
      <CommonBanner />
      <div className="contact-container">
        <form>
          <div className="form">
            <div className="form-txt">
              <h1>LET'S MAKE YOUR BRAND BRILLIANT!</h1>
              <p className="form-text-p">
                If you would like to work with us or just want to get in touch, we’d love to hear from you!
              </p>
              <h3>USA</h3>
              <p>
                195 E Parker Square Dr, Parker, CO 801
                <br />+43 982-314-0958
              </p>
              <h3>India</h3>
              <p>
                HW95+C9C, Mhada Colony, Viman Nagar, Pune, Maharashtra
                <br />411014
              </p>
              <div className="form-social-links">
                <Link to={""}><i className="fa-brands fa-facebook"></i></Link>
                <Link to={""}><i className="fa-brands fa-linkedin"></i></Link>
                <Link to={""}><i className="fa-brands fa-instagram"></i></Link>
                <Link to={""}><i className="fa-brands fa-square-x-twitter"></i></Link>
              </div>
            </div>
            <div className="form-details">
              <div className="form-details-inner">
                <input type="text" name="name" id="name" placeholder="Name" required />
                <input type="email" name="email" id="email" placeholder="Email" required />
              </div>
              <input type="text" name="subject" id="subject" placeholder="Subject" required />
              <select name="topic" id="topic" className="dropdown" required>
                <option value="job">Looking for a job</option>
                <option value="partnership">Looking for a partnership</option>
              </select>
              <textarea name="message" id="message" rows="7" cols="7" placeholder="Message" required></textarea>
              <button type="submit">SEND MESSAGE</button>
            </div>
          </div>
        </form>
      </div>
      <AboveFooter />
      <Footer />
    </>
  );
}

export default Contact;
