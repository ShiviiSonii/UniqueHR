import React, { useState, useEffect } from 'react';
import '../styles/Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [isVisible, setIsVisible] = useState(true); 
  const [isAnimating, setIsAnimating] = useState(false); 

  const closeSidebar = () => {
    setIsAnimating(true); 
    setTimeout(() => {
      setIsVisible(false); 
      setIsAnimating(false); 
    }, 500); 
  };

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden'; 
    } 
    else {
      document.body.style.overflow = ''; 
    }
    return () => {
      document.body.style.overflow = ''; 
    };
  }, [isVisible]);

  return (
    (isVisible || isAnimating) && ( 
      <div
        className={`sidebar ${isAnimating ? 'slide-out-left' : 'slide-in-left'}`}
      >
        <button className="close-button" onClick={closeSidebar}>
          &times;
        </button>
        <div className="sidebar-content">
          <div className="menu-section">
            <div className='logo-side'>
            <h1 className="logo">UniqueHR</h1>
            <span className='side-text'>MENU</span>
            </div>
            <nav className="menu">
              <Link to={"/home"}>HOME</Link>
              <Link to={"/services"}>PARTNERS</Link>
              <Link to={"/about"}>ABOUT</Link>
              <Link to={"/portfolio"}>JOBS</Link>
              <Link to={"/team"}>CONTACT</Link>
              <Link to={"/team"}>BLOGS</Link>
            </nav>
            <div className="info-section">
              <div>
                <h4>ADDRESS</h4>
                <p>541 Melville Geek,<br />Palo Alto, CA 94301</p>
              </div>
              <div>
                <h4>SOCIAL MEDIA</h4>
                <Link to={"/"}>Facebook</Link>
                <br/>
                <Link to={"/"}>Twitter</Link>
                <br/>
                <Link to={"/"}>Linkedin</Link>
                <br/>
                <Link to={"/"}>Instagram</Link>
              </div>
              <div>
                <h4>CONTACT US</h4>
                <p>Hello@email.com<br />+1 840 841 25 69</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Sidebar;
