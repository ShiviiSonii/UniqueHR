import React, { useState, useEffect } from 'react';
import "../styles/Navbar.css";
import MenuIcon from "../assets/menu.png";
import LightThemeLogo from "../assets/logo.png"
import LightMenuIcon from "../assets/lightmenu.png";
import { Link, NavLink } from 'react-router-dom';
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
        <img src={LightThemeLogo}  alt="logo" className='nav-logo'/>
        <div className='nav nav-list'>
          <NavLink to={"/"} className={({ isActive }) => (isActive ? 'links active' : 'links')}>Home</NavLink>
          <NavLink to={"/jobs"} className={({ isActive }) => (isActive ? 'links active' : 'links')}>Jobs</NavLink>
          <NavLink to={"/about"} className={({ isActive }) => (isActive ? 'links active' : 'links')}>About</NavLink>
          <NavLink to={"/partners"} className={({ isActive }) => (isActive ? 'links active' : 'links')}>Partners</NavLink>
          <NavLink to={"/contact"} className={({ isActive }) => (isActive ? 'links active' : 'links')}>Contact</NavLink>
        </div>
        <div className='theme-menu'>
        <DarkMode/>
        <img 
          src={document.documentElement.getAttribute('data-theme') === 'dark' ? LightMenuIcon : MenuIcon} 
          alt="Menu Icon" 
          height={20} 
          width={20} 
          className="nav" 
          onClick={toggleSidebar}  
        />
        </div>
      </div>

      {isSidebarVisible && <Sidebar />}
    </>
  );
}

export default Navbar;
