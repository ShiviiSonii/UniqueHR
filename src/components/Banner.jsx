import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import "../styles/Banner.css";

function Banner() {

  return (
    <>
      <Navbar />
      <div className="banner">
        <div className="content">
          <div className='content-1'>
            <img src="https://infolio1.themescamp.com/creative-agency/wp-content/uploads/sites/5/2023/12/02.jpg" alt=""  className='left-img-banner'/>
            <div>
              <h4 className='content-1-text'>6K+</h4>
              <p className='content-1-desc'>SATISFIED CLIENTS</p>
            </div>
          </div>
          <div className='content-2'>
            <h1 className='content-text'>We design <br/> unique <br/> digital <br/> experience</h1>
            <p className='content-desc'>Our team of experts is dedicated to helping you achieve your digital goals. From website design and development to SEO, PPC advertising, and social media marketing.</p>
          </div>
          <div className='content-3'>
            <img src="https://infolio1.themescamp.com/creative-agency/wp-content/uploads/sites/5/2023/12/03.jpg" alt="" className='right-img-banner' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
