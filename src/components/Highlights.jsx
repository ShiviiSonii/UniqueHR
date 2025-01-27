import React from 'react'
import "../styles/Highlights.css"
import Talent from "../assets/talent-pool.png"
import Document from "../assets/document.png"
import Niche from "../assets/niche.png"
import Success from "../assets/success.png"

function Highlights() {
  return (
    <>
        <section className='highlights-section'>
        <span className='highlight-main-heading'>Figures Don’t Lie</span>
        <p className='highlight-heading'>Check What We Have Achieved So Far
        </p>
        <div class="highlights-container scale-up-bl">
            <div class="highlight highlight-1">
            <img src={Talent} alt="" height={40} />
            <h3> 3500+</h3>
            <ul>
                <li>Candidate pool </li>
                {/* <li>Flexible rates</li> */}
            </ul>
            </div>
            <div class="highlight highlight-1">
            <img src={Document} alt="" height={40} />
            <h3>400+</h3>
            <ul>
                <li>Resume shared</li>
                {/* <li>Run your own nodes</li> */}
            </ul>
            </div>
            <div class="highlight highlight-1">
            <img src={Niche} alt="" height={40} />
            <h3>300+</h3>
            <ul>
                <li>Shortlisted profiles</li>
                {/* <li>360 Security</li> */}
            </ul>
            </div>
            <div class="highlight">
            <img src={Success} alt="" height={40} />
            <h3>36</h3>
            <ul>
                <li>Hired candidates</li>
                {/* <li>Ticket systems</li> */}
            </ul>
            </div>
        </div>
        </section>
    </>
  )
}

export default Highlights