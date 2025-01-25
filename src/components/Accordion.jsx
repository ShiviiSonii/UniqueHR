import React from 'react'
import "../styles/Accordion.css"

function Accordion() {
  return (
    <div className='accordion-container'>
        <span className='accordion-main-heading'>Commonly Asked</span>
        <p className='accordion-heading'>Let Us Clear Your Doubts
        </p>
        <div className="accordion">
            <div className="accordion-item">
                <input type="checkbox" id="accordion1"/>
                <label for="accordion1" className="accordion-item-title"><span className="icon"></span>What is Unique HR?
                </label>
                <div className="accordion-item-desc">Unique HR is a free job search platform designed to connect talented professionals with exciting career opportunities across industries. Whether you are looking for full-time jobs, part-time work, remote roles, or internships, we help you find the right job without any hidden costs, paywalls, or premium memberships.
                Our goal is to make job searching simple, fair, and accessible for everyone. Whether you are a fresher seeking your first job or an experienced professional exploring new career paths, Unique HR helps you discover, apply, and succeed.
                </div>
            </div>
            <div className="accordion-item">
                <input type="checkbox" id="accordion2"/>
                <label for="accordion2" className="accordion-item-title"><span className="icon"></span>Why is Unique HR Better Than Other Job Sites?
                </label>
                <div className="accordion-item-desc">
                Many job portals restrict access to their best features behind premium memberships or hidden fees, but Unique HR is different. We believe in 100% free access, ensuring that every job seeker gets full access to all features without any additional cost. Our platform lists only genuine job openings from companies actively hiring, eliminating spam and fake recruiters.
                With an easy-to-use interface, job searching becomes quick and efficient, without complex dashboards or overwhelming filters. Unique HR is designed for everyone, whether you are a fresher, an experienced professional, a freelancer, or looking for remote work. We make sure you find the right job without unnecessary hurdles.
                </div>
            </div>
            <div className="accordion-item">
                <input type="checkbox" id="accordion3"/>
                <label for="accordion3" className="accordion-item-title"><span className="icon"></span>Why Should You Sign Up?
                </label>
                <div className="accordion-item-desc">If you are tired of irrelevant job alerts, spam emails, and endless recruiter calls, Unique HR simplifies your job search. Our system provides job recommendations that match your skills, experience, and career goals, helping you find relevant opportunities faster. You can apply directly to companies without middlemen or third-party interference.
                Managing your job applications is seamless with a structured dashboard that helps you track progress and update your profile whenever needed. In addition to job listings, Unique HR provides career growth resources, including resume-building tips and interview guidance, to help you prepare for the next step in your career.
                </div>
            </div>

            <div className="accordion-item">
                <input type="checkbox" id="accordion4"/>
                <label for="accordion4" className="accordion-item-title"><span className="icon"></span>How Can You Join Unique HR?
                </label>
                <div className="accordion-item-desc">Joining Unique HR is quick and hassle-free. The sign-up process takes less than a minute, allowing you to create a profile and start exploring jobs immediately. Completing your profile with your skills, experience, and job preferences ensures that you receive the most relevant opportunities. Uploading your CV makes it easier for employers to discover your profile, increasing your chances of getting hired.
                Once your profile is ready, you can browse through job listings and apply directly to positions that match your interests. There are no hidden steps or complicated processes, making job searching as straightforward as possible.
                </div>
            </div>

            <div className="accordion-item">
                <input type="checkbox" id="accordion5"/>
                <label for="accordion5" className="accordion-item-title"><span className="icon"></span>Do We Work with Big-Name Companies?
                </label>
                <div className="accordion-item-desc">Not yet, but that does not mean we do not offer great opportunities. The best jobs are not always from the biggest brands. Unique HR connects you with fast-growing startups looking for skilled professionals, mid-sized firms offering competitive salaries and career growth, and hidden gems that provide excellent work-life balance.
                    Instead of focusing only on brand names, we help you find jobs where your skills are valued and your career can grow. Unique HR is about real opportunities that fit your professional goals, not just companies with big names.
                </div>
            </div>
        </div>
    </div>
  )
}

export default Accordion