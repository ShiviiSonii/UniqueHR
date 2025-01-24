import React from 'react';
import "../styles/TopListing.css";
import { Link } from 'react-router-dom';
import NextIcon from "../assets/next.png"

function TopListing() {
  const jobs = [
    {
      title: "Social Media Coordinator",
      company: "Hyderabad",
      locationType: "Onsite",
      jobType: "Full-Time",
      experience: "1 Year",
      postedAt : "3 hours ago"
    },
    {
      title: "Customer Success Executive",
      company: "Pune",
      locationType: "Onsite",
      jobType: "Full Time",
      experience: "3-5 Years",
      postedAt : "1 week ago"
    },
    {
      title: "Talent Acquisition Specialist",
      company: "Hyderabad",
      locationType: "Hybrid",
      jobType: "Part-Time",
      experience: "1+ Years",
      postedAt : "2 weeks ago"
    },
    {
      title: "Oracle HCM Technical Consultant",
      company: "Hyderabad",
      locationType: "Onsite",
      jobType: "Full-Time",
      experience: "6+ Years",
      postedAt : "2 weeks ago"
    },
  ];

  return (
    <div className="job-list">
      <div>
      <span className='listing-main-heading'>Dream Role!</span>
      <div className='listing-right-section'>
      <p className='listing-heading'>See If You Are One Of Them</p>
      <button className='listing-button'><span>View More</span><img src={NextIcon} height={26}/></button>
      </div>
      </div>
      <div className='job-grids'>
      {jobs.map((job, index) => (
        <div className="job-preview" key={index}>
          <div className="job-content">
            <h4 className="job-title">{job.title}</h4>
            <p className="job-details">
              <span className="company">
                <i className="fas fa-map-marker-alt"></i> {job.company}
              </span>
              <span>
                <i className="fas fa-briefcase"></i> {job.jobType}
              </span>
              <span>
                <i className="fas fa-clock"></i> {job.locationType}
              </span>
              <span>
                <i className="fas fa-user"></i> {job.experience}
              </span>
              <span>
                <i className="fas fa-calendar-alt"></i> {job.postedAt}
              </span>
            </p>
          </div>
          <Link to="/" className="btn-apply button">
            Apply
          </Link>
        </div>
      ))}
      </div>
    </div>
  );
}

export default TopListing;
