import React from 'react';
import Headerstyles from './Header.module.css';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Header = () => {


  return (
    <header className={Headerstyles.header}>
      <div className={Headerstyles.logo}>Jawaari Foundation</div>
      <nav className={Headerstyles.nav}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/Blog">Blog</Link></li>
          {/* <li><Link to="/BlogDescription">Blog</Link></li> */}
        </ul>
      </nav>
      {/* <button className={Headerstyles.registerBtn}>Register</button> */}
    </header>
  );
};

export default Header;
