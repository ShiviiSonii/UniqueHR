import React from 'react'
import "../styles/AboveFooter.css"

function AboveFooter() {
  return (
    <>
      <section className="cta">
        <div className="container">
              <h1>Looking for a job or looking to hire?</h1>
              <p>Let's find you the perfect role and the perfect team, together.</p>
              <div className="ctas">
              <button class="custom-btn btn"><span>Sign up now</span></button>
              <button class="custom-btn btn"><span>Partner with us</span></button>
              </div>
        </div>
      </section>
    </>
  )
}

export default AboveFooter