import React from 'react';
import Navbar from '../components/Navbar';
import AboveFooter from '../components/AboveFooter';
import Footer from '../components/Footer';
import CommonBanner from '../components/CommonBanner';

function About() {
  return (
    <>
      <Navbar />
      <CommonBanner page="About"/>
      <AboveFooter />
      <Footer />
    </>
  );
}

export default About;
