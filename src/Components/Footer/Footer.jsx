// Footer.jsx
import React from 'react';
import styles from './Footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* About */}
        <div className={styles.section}>
          <h3>Jawaari Foundation</h3>
          <p>
            Jawaari Foundation is a non-profit organization committed to supporting vulnerable communities
            through scholarships, food aid, and healthcare services. We believe in building a brighter future 
            for all through compassion and action.
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.section}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/programs">Programs</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.section}>
          <h4>Contact Us</h4>
          <p>Email: info@jawaarifoundation.org</p>
          <p>Phone: +252 XXX XXX XXX</p>
          <p>Location: Mogadishu, Somalia</p>

          <div className={styles.socials}>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="mailto:info@jawaarifoundation.org"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Jawaari Foundation. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
