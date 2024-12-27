import React from 'react'
import Navbar from "./Navbar"
import "../styles/Banner.css"

function Banner() {
  return (
   <>
   <Navbar/>
   <div class="banner">
        <div class="content">
            <h1>Find the Perfect Fit for Your Career
            </h1>
            <p>We connect talented individuals like you with amazing job opportunities. Discover your potential and land a role that excites you.
            </p>
            <button class="banner-btn">Register Now</button>
        </div>
    </div>
   </>
  )
}

export default Banner