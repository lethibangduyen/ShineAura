// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Assets/css/global.css';
import logo from '../Assets/Logo.svg';
import './Navbar.css';
import ButtonCollectionButton from '../Button/Button_collection.jsx'; 
// import btnStyle from '../Button/NewButton/button.jsx';
import Button from '../Button/NewButton/button.jsx';
import ButtonUser from '../Button/Newest-but/Button_user_information/Button_user_information.jsx';

function Navbar() {
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    updateNavbar(window.scrollY >= 20);
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []); 

  return (
    <div className={`navigation flex-row flex-center-align ${navColour ? 'nav-scroll' : ''}`}>
      <div className="nav-logo flex-col">
        <img className="nav-logo-icon" src={logo} alt="logo" />
      </div>
      <div className="nav-parent flex-row gap-2xs">
        <div className="nav-button">
          <ButtonCollectionButton />
        </div>
        <div className="nav-button">
          <Button text="HOT DEAL" btnStyle="nav-btn" />
        </div> 
        <div className="nav-button">
          <Button text="BEST SELLER" btnStyle="nav-btn" />
        </div>
        <div className="nav-button">
          <Link to="/about-us" className="nav-link">
            <Button text="ABOUT US" btnStyle="nav-btn" />
          </Link>
        </div>
        <div className="nav-button">
          <Link to="/policy" className="nav-link">
            <Button text="POLICY" btnStyle="nav-btn" />
          </Link>
        </div>
      </div>
      <div className="nav-icon flex-row gap-xs">
        <div className="icon-button">
          <i className="bi bi-search"></i>
        </div>
        <div className="icon-button">
          <i className="bi bi-cart"></i>
        </div>
        <div className="icon-button">
          <ButtonUser />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
