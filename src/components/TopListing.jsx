import React from 'react';
import "../styles/TopListing.css";
import { Link } from 'react-router-dom';

function TopListing() {
  const jobs = [
    {
      title: "Senior Web Designer",
      company: "Seattle, WA",
      locationType: "Onsite",
      jobType: "Full-Time",
      experience: "3-5 Years",
      postedAt : "3 hours ago"
    },
    {
      title: "Front-End Engineer",
      company: "New York, NY",
      locationType: "Remote",
      jobType: "Contract",
      experience: "2-4 Years",
      postedAt : "1 week ago"
    },
    {
      title: "UI/UX Designer",
      company: "Los Angeles, CA",
      locationType: "Hybrid",
      jobType: "Part-Time",
      experience: "1-3 Years",
      postedAt : "2 weeks ago"
    },
  ];

  return (
    <div className="job-list">
      <p className='job-listing-title'>Top Job Listing</p>
      {jobs.map((job, index) => (
        <div className="job-preview" key={index}>
          <div className="content">
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
          <Link to="/" className="btn-apply">
            Apply
          </Link>
        </div>
      ))}
    </div>
  );
}

export default TopListing;
