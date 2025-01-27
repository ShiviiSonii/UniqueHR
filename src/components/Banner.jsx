import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import "../styles/Banner.css";
import { Link } from 'react-router-dom';

export const CircularText = () => {
  const text = "EXPLORE MORE EXPLORE MORE - ";
  return (
    <div className="circle">
      {text.split("").map((letter, i) => (
        <span key={i} style={{ "--i": i, "--total": text.length }}>
          {letter}
        </span>
      ))}
      <div className="icon-container">
        <Link to={"https://youtu.be/mVtUlRpoCzs?si=rlYCdm9FWH6z5BMd"}>
          <i className="fa-solid fa-play"></i>
        </Link>
      </div>
    </div>
  );
};

function Banner() {
  const [textIndex, setTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const sliderTexts = ["better job", "higher paying job", "exciting job", "more fun job"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);  // Trigger animation
      setTimeout(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % sliderTexts.length);
        setIsAnimating(false); // Stop animation after text change
      }, 400); // Animation duration (400ms)
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <div className="banner">
        <div className="content">
          <div className='content-1'>
            <img
              src="https://infolio1.themescamp.com/creative-agency/wp-content/uploads/sites/5/2023/12/02.jpg"
              alt=""
              className='left-img-banner'
            />
            <div>
              <h4 className='content-1-text'>6K+</h4>
              <p className='content-1-desc'>SATISFIED CLIENTS</p>
            </div>
          </div>
          <div className='content-2'>
            <h1 className='content-text'>
              Land a{" "}
              <span className={`highlight ${isAnimating ? "" : ""}`}>
                {sliderTexts[textIndex]}
              </span>
            </h1>
            <p className='content-desc'>
              Your dream job is out there – and it’s hiring!
              <br />
              Ready for something new, exciting, and rewarding?
            </p>
          </div>
          <div className='content-3'>
            <CircularText />
            <img
              src="https://infolio1.themescamp.com/creative-agency/wp-content/uploads/sites/5/2023/12/03.jpg"
              alt=""
              className='right-img-banner'
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
