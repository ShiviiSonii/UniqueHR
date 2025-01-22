import React from 'react'
import "../styles/Highlights.css"

function Highlights() {
  return (
    <>
        <section className='highlights-section'>
        <span className='highlight-main-heading'>Figures Don’t Lie</span>
        <p className='highlight-heading'>Check what we have achieved so far
        </p>
        <div class="highlights-container scale-up-bl">
            <div class="highlight">
            <div class="icon">💰</div>
            <h3> 3500+</h3>
            <ul>
                <li>Candidate pool </li>
                {/* <li>Flexible rates</li> */}
            </ul>
            </div>
            <hr/>
            <div class="highlight">
            <div class="icon">🏛️</div>
            <h3>400+</h3>
            <ul>
                <li>Resume shared</li>
                {/* <li>Run your own nodes</li> */}
            </ul>
            </div>
            <hr/>
            <div class="highlight">
            <div class="icon">🔒</div>
            <h3>300+</h3>
            <ul>
                <li>Shortlisted profiles</li>
                {/* <li>360 Security</li> */}
            </ul>
            </div>
            <hr/>
            <div class="highlight">
            <div class="icon">🎧</div>
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