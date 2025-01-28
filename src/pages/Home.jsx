import React from 'react'
import Footer from '../components/Footer.jsx';
import Banner from '../components/Banner.jsx';
import Features from '../components/Features.jsx';
import Process from '../components/Process.jsx';
import TopListing from '../components/TopListing.jsx';
import Highlights from '../components/Highlights.jsx';
import Testimonial from '../components/Testimonial.jsx';
import Blogs from '../components/Blogs.jsx';
import AboveFooter from '../components/AboveFooter.jsx';
import Accordion from '../components/Accordion.jsx';


function Home() {
  return (
    <>
        <Banner />
        <Features />
        <Process />
        <Highlights />
        <TopListing />
        <Testimonial />
        <Blogs />
        <Accordion />
        <AboveFooter />
        <Footer />
    </>
  )
}

export default Home