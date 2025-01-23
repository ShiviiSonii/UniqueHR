import React from 'react'
import "../styles/Accordion.css"

function Accordion() {
  return (
    <div className='accordion-container'>
        <span className='accordion-main-heading'>Commonly Asked</span>
        <p className='accordion-heading'>Let us clear your doubts
        </p>
        <div class="accordion">
            <div class="accordion-item">
                <input type="checkbox" id="accordion1"/>
                <label for="accordion1" class="accordion-item-title"><span class="icon"></span>What is Unique HR?
                </label>
                <div class="accordion-item-desc">Unique HR is your free job search platform, connecting talented professionals with exciting career opportunities across industries. Whether you're looking for full-time jobs, part-time work, remote roles, or internships, we help you land the perfect job—without any hidden costs!</div>
                </div>
            <div class="accordion-item">
                <input type="checkbox" id="accordion2"/>
                <label for="accordion2" class="accordion-item-title"><span class="icon"></span>Why is Unique HR Better Than Other Job Sites?
                </label>
                <div class="accordion-item-desc">
                Unlike traditional job portals, we believe in 100% free access to the best opportunities. No premium memberships, no paywalls, and no locked features—just genuine job listings from companies looking for skilled professionals like you.</div>
            </div>

            <div class="accordion-item">
                <input type="checkbox" id="accordion3"/>
                <label for="accordion3" class="accordion-item-title"><span class="icon"></span>Why Should You Sign Up?
                </label>
                <div class="accordion-item-desc">Tired of irrelevant job alerts, spammy emails, and endless recruiter calls? Unique HR simplifies your job search by matching you with roles that truly fit your skills and preferences. No spam, no gimmicks—just real jobs, straight to your inbox.
                </div>
            </div>

            <div class="accordion-item">
                <input type="checkbox" id="accordion4"/>
                <label for="accordion4" class="accordion-item-title"><span class="icon"></span>How Can You Join Unique HR?
                </label>
                <div class="accordion-item-desc">Joining Unique HR is quick and hassle-free. Simply sign up for free, fill in your details, upload your CV, and start applying for jobs that match your skills and interests.</div>
            </div>

            <div class="accordion-item">
                <input type="checkbox" id="accordion5"/>
                <label for="accordion5" class="accordion-item-title"><span class="icon"></span>Do We Work with Big-Name Companies?
                </label>
                <div class="accordion-item-desc">Not yet—but hear us out. The best job opportunities don’t always come from the biggest brands. We connect you with fast-growing startups, mid-sized firms, and hidden gems offering great salary packages, career growth, and work-life balance.
                </div>
            </div>
        </div>
    </div>
  )
}

export default Accordion