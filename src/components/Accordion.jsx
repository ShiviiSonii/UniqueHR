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
                <div class="accordion-item-desc">Unique HR connects talented individuals like you with exciting job opportunities – for free!</div>
                </div>
            <div class="accordion-item">
                <input type="checkbox" id="accordion2"/>
                <label for="accordion2" class="accordion-item-title"><span class="icon"></span>How are we better than other job sites?</label>
                <div class="accordion-item-desc">
                No Hidden Fees. No Premium Plans. We believe in free access to the best roles. No gimmicks, no locked features.
                </div>
            </div>

            <div class="accordion-item">
                <input type="checkbox" id="accordion3"/>
                <label for="accordion3" class="accordion-item-title"><span class="icon"></span>Why should you sign up?</label>
                <div class="accordion-item-desc">Why not? We prioritize matching you with roles that fit your skills – no spam, no irrelevant interviews, and no endless emails. Just real opportunities, straight to you</div>
            </div>

            <div class="accordion-item">
                <input type="checkbox" id="accordion4"/>
                <label for="accordion4" class="accordion-item-title"><span class="icon"></span>How can you join us?</label>
                <div class="accordion-item-desc">It’s simple – sign up, fill in your details, submit your CV, and you’re in!</div>
            </div>

            <div class="accordion-item">
                <input type="checkbox" id="accordion5"/>
                <label for="accordion5" class="accordion-item-title"><span class="icon"></span>Do we work with big-name companies?
                </label>
                <div class="accordion-item-desc">Not yet, but hear us out. While we may not have the biggest names, we offer dream roles with top-notch packages that matter to you. Sometimes, the best jobs come from unexpected places.</div>
            </div>
        </div>
    </div>
  )
}

export default Accordion