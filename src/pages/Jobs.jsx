import React from 'react'
import CommonBanner from '../components/CommonBanner'
import Navbar from '../components/Navbar'
import AboveFooter from '../components/AboveFooter'
import Footer from '../components/Footer'
import "../styles/Jobs.css"

function Jobs() {
  return (
    <>
    <Navbar />
    <CommonBanner page="Jobs"/>
    <div className='jobs-section'>
        <div className='filter-section'>
            <div className='filter-section-1'><input type="text" placeholder='Search'/></div>
            <div className='filter-section-2'><input type="text" placeholder='Location'/></div>
            <div className='filter-section-3'><input type="text" placeholder='Job type'/></div>
            <div className='filter-section-4'><input type="text" placeholder='Salary'/></div>
            <div className='filter-section-5'>
            <button className='custom-btn btn'><span>Find Job</span></button>
            <button className='custom-btn btn'><span>Reset</span></button>
            </div>
        </div>
    </div>
    <AboveFooter />
    <Footer />
    </>
  )
}

export default Jobs