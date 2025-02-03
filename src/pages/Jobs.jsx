import React from 'react'
import CommonBanner from '../components/CommonBanner'
import Navbar from '../components/Navbar'
import AboveFooter from '../components/AboveFooter'
import Footer from '../components/Footer'
import "../styles/Jobs.css"
import JobCard from '../components/JobCard'

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
        <div className='jobs-list'>
          <JobCard 
            title="UI / UX Designer" 
            subtitle="The User Experience Designer position exists to create compelling digital experiences...
            The User Experience Designer position exists to create compelling digital experiences..." 
            location="Hyderabad"
            type="Full Time" 
            experience="Min. 1 Year" 
            level="Senior Level" 
            date_posted="15 mins ago"
          />
          <JobCard 
            title="UI / UX Designer" 
            subtitle="The User Experience Designer position exists to create compelling digital experiences...
            The User Experience Designer position exists to create compelling digital experiences..." 
            location="Hyderabad"
            type="Full Time" 
            experience="Min. 1 Year" 
            level="Senior Level" 
            date_posted="15 mins ago"
          />
          <JobCard 
            title="UI / UX Designer" 
            subtitle="The User Experience Designer position exists to create compelling digital experiences...
            The User Experience Designer position exists to create compelling digital experiences..." 
            location="Hyderabad"
            type="Full Time" 
            experience="Min. 1 Year" 
            level="Senior Level" 
            date_posted="15 mins ago"
          />
           <JobCard 
            title="UI / UX Designer" 
            subtitle="The User Experience Designer position exists to create compelling digital experiences...
            The User Experience Designer position exists to create compelling digital experiences..." 
            location="Hyderabad"
            type="Full Time" 
            experience="Min. 1 Year" 
            level="Senior Level" 
            date_posted="15 mins ago"
          />
           <JobCard 
            title="UI / UX Designer" 
            subtitle="The User Experience Designer position exists to create compelling digital experiences...
            The User Experience Designer position exists to create compelling digital experiences..." 
            location="Hyderabad"
            type="Full Time" 
            experience="Min. 1 Year" 
            level="Senior Level" 
            date_posted="15 mins ago"
          />
           <JobCard 
            title="UI / UX Designer" 
            subtitle="The User Experience Designer position exists to create compelling digital experiences...
            The User Experience Designer position exists to create compelling digital experiences..." 
            location="Hyderabad"
            type="Full Time" 
            experience="Min. 1 Year" 
            level="Senior Level" 
            date_posted="15 mins ago"
          />
        </div>
    </div>
    <AboveFooter />
    <Footer />
    </>
  )
}

export default Jobs