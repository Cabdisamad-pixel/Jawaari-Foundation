import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Headerstyles from './Header.module.css';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { MdError } from "react-icons/md";
import { FaBars } from "react-icons/fa";   // Hamburger icon
import { FaTimes } from "react-icons/fa";  // Close icon

const SideNavBar = (props) => {
  return (
    <div className={Headerstyles.SideBarContainer}>
      <ul>
        <i onClick={() => props.responsiveHandler()} class="fa-solid fa-xmark"></i>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/Blog">Blog</Link></li>
      </ul>
    </div>
  )
}



const Header = () => {

  const [isMobile, setIsMobile] = useState(true)

  const isMobileChangeHandler = () => {
    setIsMobile(prev => !prev)
  }

  return (
    <header className={Headerstyles.header}>
      <div className={Headerstyles.logo}>Jawaari Foundation</div>
      <nav className={Headerstyles.nav}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/Blog">Blog</Link></li>
        </ul>
      </nav>
      <button onClick={isMobileChangeHandler} className={Headerstyles.Menue}>
        <FaBars style={{color:'#fff', height:'1rem'}} size={20} />
      </button>


      {isMobile && ReactDOM.createPortal(<SideNavBar responsiveHandler={isMobileChangeHandler} />, document.getElementById('sideBarRoot'))}

    </header>
  );
};

export default Header;
