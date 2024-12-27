import React from 'react';
import '../styles/Footer.css'; 
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <h3 class="footer-logo">InFolio</h3>
      </div>
      <div className='footer-section'>
      <div class="footer-address">
        <h3>Address</h3>
          <p>5919 Trussville Crossings Pkwy, Birmingham</p>
          <Link to="tel:+24563432445" class="footer-phone">+2 456 (343) 24 45</Link>
        </div>
      </div>
      <div class="footer-section">
        <h3>Useful Links</h3>
        <ul>
          <li><Link to={""}>About</Link></li>
          <li><Link to={""}>Services</Link></li>
          <li><Link to={""}>Blog</Link></li>
          <li><Link to={""}>Contact</Link></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Support</h3>
        <ul>
          <li><Link to={""}>FAQs</Link></li>
          <li><Link to={""}>Terms & Conditions</Link></li>
          <li><Link to={""}>Privacy Policy</Link></li>
          <li><Link to={""}>Help</Link></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="social-links">
        <Link to={""}>Facebook</Link>
        <Link to={""}>Website</Link>
        <Link to={""}>LinkedIn</Link>
        <Link to={""}>Instagram</Link>
        </div>
      <p>&copy; 2024 UniqueHR</p>
    </div>
  </footer>
  );
};

export default Footer;
