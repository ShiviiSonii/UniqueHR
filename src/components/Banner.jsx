import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import "../styles/Banner.css";
import BannerImg from "../assets/banner-img.png";

function Banner() {
  const [textIndex, setTextIndex] = useState(0);
  const sliderTexts = ["new", "exciting", "rewarding"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % sliderTexts.length);
    }, 2000); // Change text every 2 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <>
      <Navbar />
      <div className="banner">
        <div className="content">
          <div className="content-banner">
            <h1>Land a better, higher paying, exciting, more fun JOB!</h1>
            <p>
              Your dream job is out there – and it’s hiring!
              <br/>
              Ready for something <span className="highlight">{sliderTexts[textIndex]}?</span>
            </p>
            <button className="banner-btn">Register Now</button>
          </div>
          <div className="content-img">
            <img src={BannerImg} alt="Career Opportunities" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
