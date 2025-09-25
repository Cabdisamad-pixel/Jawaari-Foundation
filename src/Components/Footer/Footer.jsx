// Footer.jsx
import React from 'react';
import Footerstyles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={Footerstyles.footer}>
      <div className={Footerstyles.footerContent}>
        {/* About */}
        <div className={Footerstyles.section}>
          <h3>Jawaari Foundation</h3>
          <p>
            Jawaari Foundation is a non-profit organization committed to supporting vulnerable communities
            through scholarships, food aid, and healthcare services. We believe in building a brighter future
            for all through compassion and action.
          </p>
        </div>

        {/* Quick Links */}
        <div className={Footerstyles.section}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={Footerstyles.section}>
          <div>
            <h4>Contact Us</h4>
            <p>Email: info@jawaarifoundation.org</p>
            <p>Phone: +252 XXX XXX XXX</p>
            <p>Location: Mogadishu, Somalia</p>
          </div>

          <div className={Footerstyles.socials}>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="mailto:info@jawaarifoundation.org"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className={Footerstyles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Jawaari Foundation. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
