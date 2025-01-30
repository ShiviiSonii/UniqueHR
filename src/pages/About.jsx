import React from 'react';
import Navbar from '../components/Navbar';
import AboveFooter from '../components/AboveFooter';
import Footer from '../components/Footer';
import CommonBanner from '../components/CommonBanner';
import Testimonial from '../components/Testimonial';
import Blogs from '../components/Blogs';
import { Link } from 'react-router-dom';
import "../styles/About.css"

function About() {
  return (
    <>
      <Navbar />
      <CommonBanner page="About"/>
      <div className='about-content'>
            <div className="about-1">
              <span class="about-main-heading">ABOUT COMPANY</span>
              <h3 className="about-text">
              Design & Development, Optimization Agency
              </h3>
              <p className='about-p'>Whether you are a development agency looking to outsource design work, a company in search of a Product Designer or Product Team, a marketing agency that needs.</p>
              <button className='custom-btn btn'><span>Let's Contact</span></button>
            </div>
            <div className='about-2'>
            <div className="about-card">
                <div className="about-container-card">
                <p className="about-card-title">Work with the best in the industry</p>
                <p className="about-card-description">We partner with leading companies to bring you roles that match your potential and aspirations.
                </p>
                <button className='custom-btn btn'><span>Read More</span></button>
              </div>
              </div>
              <div className="about-card">
                <div className="about-container-card">
                <p className="about-card-title">Work with the best in the industry</p>
                <p className="about-card-description">We partner with leading companies to bring you roles that match your potential and aspirations.
                </p>
                <button className='custom-btn btn'><span>Read More</span></button>
              </div>
              </div>
            </div>
      </div>
      <Testimonial/>
      <Blogs/>
      <AboveFooter />
      <Footer />
    </>
  );
}

export default About;
