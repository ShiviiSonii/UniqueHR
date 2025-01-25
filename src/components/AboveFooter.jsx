import React from 'react'
import "../styles/AboveFooter.css"

function AboveFooter() {
  return (
    <>
      <section class="cta">
        <div class="container">
              <h1>Looking for a job or looking to hire?</h1>
              <p>Let’s find you the perfect role and the perfect team, together.</p>
              <div className="ctas">
              <button type="button" className="footer-cta"> Sign up now</button>
              <button type="button" className="footer-cta">Partner with us</button>
              </div>
        </div>
      </section>
    </>
  )
}

export default AboveFooter