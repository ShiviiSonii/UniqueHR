import React from 'react';
import "../styles/Features.css";

function Features() {
  return (
    <section className='feature-section'>
      <span className='feature-main-heading'>Features</span>
      <p className="feature-heading">What we provide?</p>

      <div className="gradient-cards">
        <div className="card">
          <div className="container-card">
            <i className="fa fa-check-circle fa-4x" style={{ color: '#54E8A9' }}></i>
            <p className="card-title">Zero-cost Possibilities</p>
            <p className="card-description">Hubble lets users borrow USDH for a one-time 0.5% fee. No variable rates. No interest charged, ever.</p>
          </div>
        </div>

        <div className="card">
          <div className="container-card">
            <i className="fa fa-credit-card fa-4x" style={{ color: '#2E3042' }}></i>
            <p className="card-title">Simple and Transparent</p>
            <p className="card-description">Hubble’s fee structure is simple, transparent, and fair—allowing for quick and easy lending.</p>
          </div>
        </div>

        <div className="card">
          <div className="container-card">
            <i className="fa fa-users fa-4x" style={{ color: '#2FCB89' }}></i>
            <p className="card-title">Community-Driven</p>
            <p className="card-description">Our platform is built by the community, for the community, ensuring that we meet your financial needs.</p>
          </div>
        </div>

        <div className="card">
          <div className="container-card">
            <i className="fa fa-check-circle fa-4x" style={{ color: '#54E8A9' }}></i>
            <p className="card-title">Zero-cost Possibilities</p>
            <p className="card-description">Hubble lets users borrow USDH for a one-time 0.5% fee. No variable rates. No interest charged, ever.</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Features;
