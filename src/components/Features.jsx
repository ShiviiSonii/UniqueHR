import React from 'react';
import "../styles/Features.css";
import Team from "../assets/team.png"
import Shield from "../assets/shield.png"
import Resume from "../assets/resume.png"
import Notification from "../assets/notification.png"

function Features() {
  return (
    <section className='feature'>
      <div className='feature-section'>
      <span className='feature-main-heading'>What makes us Unique?</span>
      <p className="feature-heading">Land your dream job with us!
      </p>

      <div className="gradient-cards">
        <div className="card">
          <div className="container-card">
            <img src={Team} alt="" height={80} />
            <p className="card-title">Work with the best in the Industry</p>
            <p className="card-description">We partner with leading companies to bring you roles that match your potential and aspirations.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="container-card">
          <img src={Notification} alt="" height={80} />
            <p className="card-title">Regular updates, always in the Loop</p>
            <p className="card-description">From new openings to interview updates, we keep you informed at every step – no ghosting, just growth.</p>
          </div>
        </div>

        <div className="card">
          <div className="container-card">
          <img src={Resume} alt="" height={80} />
            <p className="card-title"> We’ve Got Your CV Covered
            </p>
            <p className="card-description">Once you send us your CV, we actively match it with relevant roles and alert you to exciting opportunities.</p>
          </div>
        </div>

        <div className="card">
          <div className="container-card">
          <img src={Shield} alt="" height={80} />
            <p className="card-title">Data Privacy You Can Trust
            </p>
            <p className="card-description">No unnecessary calls or emails. We’ll only contact you when there’s a genuine role worth your attention.</p>
          </div>
        </div>

      </div>
      </div>
    </section>
  );
}

export default Features;
