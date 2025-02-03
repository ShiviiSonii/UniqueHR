import React from "react";
import "../styles/JobCard.css";

const JobCard = ({ title, subtitle, location, type, experience, level,date_posted }) => {
  return (
    <div className="job-card">
      <div className="job-card-title">{title}</div>
      <div className="job-card-subtitle">{subtitle}</div>
      <div className="job-detail-buttons">
        <button className="detail-button">{location}</button>
        <button className="detail-button">{type}</button>
        <button className="detail-button">{experience}</button>
        <button className="detail-button">{level}</button>
        <button className="detail-button">{date_posted}</button>
      </div>
      <div className="job-card-buttons">
        <button className="btn custom-btn"><span>Apply Now</span></button>
      </div>
    </div>
  );
};

export default JobCard;
