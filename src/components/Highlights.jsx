import React from 'react'
import "../styles/Highlights.css"

function Highlights() {
  return (
    <>
        <div class="highlights-container">
            <div class="highlight">
            <div class="icon">💰</div>
            <h3>Low Cost</h3>
            <ul>
                <li>Competitive fee</li>
                <li>Flexible rates</li>
            </ul>
            </div>
            <hr/>
            <div class="highlight">
            <div class="icon">🏛️</div>
            <h3>Permission Less</h3>
            <ul>
                <li>Open for integration</li>
                <li>Run your own nodes</li>
            </ul>
            </div>
            <hr/>
            <div class="highlight">
            <div class="icon">🔒</div>
            <h3>Secure Data</h3>
            <ul>
                <li>Open source sheet</li>
                <li>360 Security</li>
            </ul>
            </div>
            <hr/>
            <div class="highlight">
            <div class="icon">🎧</div>
            <h3>24 X 7 Support</h3>
            <ul>
                <li>Toll free number</li>
                <li>Ticket systems</li>
            </ul>
            </div>
        </div>
    </>
  )
}

export default Highlights