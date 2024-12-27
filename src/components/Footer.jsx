import React from 'react';
import '../styles/Footer.css'; 

const Footer = () => {
  return (
    <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <div class="footer-logo">InFolio</div>
      </div>
      <div className='footer-section'>
      <div class="footer-address">
        <h3>Address</h3>
          <p>5919 Trussville Crossings Pkwy, Birmingham</p>
          <a href="tel:+24563432445" class="footer-phone">+2 456 (343) 24 45</a>
        </div>
      </div>
      <div class="footer-section">
        <h3>Useful Links</h3>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Support</h3>
        <ul>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="social-links">
        <a href="#">Facebook</a>
        <a href="#">Website</a>
        <a href="#">LinkedIn</a>
        <a href="#">Instagram</a>
        <i class="fa-solid fa-house"></i>
      </div>
      <p>&copy; 2024 UniqueHR</p>
    </div>
  </footer>
  );
};

export default Footer;
