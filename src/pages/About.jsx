import React from 'react';
import Navbar from '../components/Navbar';
import AboveFooter from '../components/AboveFooter';
import Footer from '../components/Footer';
import CommonBanner from '../components/CommonBanner';
import Testimonial from '../components/Testimonial';
import Blogs from '../components/Blogs';

function About() {
  return (
    <>
      <Navbar />
      <CommonBanner page="About"/>
      <Testimonial/>
      <Blogs/>
      <AboveFooter />
      <Footer />
    </>
  );
}

export default About;
