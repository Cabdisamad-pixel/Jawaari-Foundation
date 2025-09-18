import React from 'react';
import styles from './Header.module.css';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Header = () => {

  // Navigate()
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Jawaari Foundation</div>
      <nav className={styles.nav}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <button className={styles.registerBtn}>Register</button>
    </header>
  );
};

export default Header;
