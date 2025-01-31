import React from 'react';
import "../styles/CommonBanner.css";
import FinisherHeader from './FinishHeader';

function CommonBanner({ page }) {
  return (
    <>
      <FinisherHeader />
      <section className="common-banner">
        <div className="common-banner-container">
          <h1>{page} Us</h1>
          <p>Home | {page}</p>
        </div>
      </section>
    </>
  );
}

export default CommonBanner;
