import React from 'react'
import "../styles/CommonBanner.css"

function CommonBanner({page}) {
  return (
    <>
      <section className="common-banner">
        <div className="common-banner-container">
              <h1>{page} Us</h1>
              <p>Home | {page}</p>
        </div>
      </section>
    </>
  )
}

export default CommonBanner