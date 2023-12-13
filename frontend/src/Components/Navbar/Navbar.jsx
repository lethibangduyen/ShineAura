// Navbar.jsx
import React, { useState } from 'react';
import logo from '../Assets/Logo.svg';
import './Navbar.css';
import ButtonCollectionButton from '../Button/Button_collection.jsx'; 
import Button from '../Button/Button_normal.jsx';

const Navbar = () => {
  const [showAllParent, setShowAllParent] = useState(false);

  const handleSButtonClick = () => {
    setShowAllParent(!showAllParent);
  };

  return (
    <div className="navigation">
      <div className="nav-logo">
        <img className="nav-logo-icon" src={logo} alt="logo" />
      </div>
      <div className="nav-parent">
        <div className=" nav-button Dropdown">
          <ButtonCollectionButton />
        </div>
        <div className="nav-button">
          <Button buttonText="HOT DEAL" />
        </div>
        <div className="nav-button">
        <Button buttonText="BEST SELLER" />
        </div>
        <div className="nav-button">
        <Button buttonText="ABOUT US" />
        </div>
        <div className="nav-button">
        <Button buttonText="POLICY" />
        </div>
        
      </div>
      <div className="nav-icon">
          <div className="icon-button">
          <i className=" bi bi-bag"></i>
          </div>
          <div className="icon-button">
          <i className=" bi bi-people"></i>
          </div>
          <div className="icon-button">
          <i className=" bi bi-search"></i>
          </div>
        </div>
    </div>
  );
};

export default Navbar;

