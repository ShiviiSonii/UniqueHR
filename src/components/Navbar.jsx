import React, { useState, useEffect } from 'react';
import "../styles/Navbar.css";
import MenuIcon from "../assets/menu.png";
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';  
import DarkMode from './DarkMode.jsx';

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); 

  const handleScroll = () => {
    if (window.pageYOffset > 15) {  
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);  
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`nav-bar ${isSticky ? 'sticky slide-in-top' : ''}`}>
        <img src="https://www.uniquehr.in/img/logo-150.png" alt="logo" className='nav-logo'/>
        <div className='nav nav-list'>
          <Link to={"/"} className='links active'>Home</Link>
          <Link to={"/jobs"} className='links'>Jobs</Link>
          <Link to={"/about"} className='links'>About</Link>
          <Link to={"/partners"} className='links'>Partners</Link>
          <Link to={"/contact"} className='links'>Contact</Link>
        </div>
        <DarkMode/>
        <img 
          src={MenuIcon} 
          alt="Menu Icon" 
          height={20} 
          width={20} 
          className='nav' 
          onClick={toggleSidebar}  
        />
      </div>

      {isSidebarVisible && <Sidebar />}
    </>
  );
}

export default Navbar;
