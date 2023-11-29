// Navbar.jsx
import React, { useState } from 'react';
import logo from '../Assets/Logo.png';
import streamline from '../Assets/streamline.svg';
import './Navbar.css';
import './Global.css';

const Navbar = () => {
  const [showAllParent, setShowAllParent] = useState(false);

  const handleSButtonClick = () => {
    setShowAllParent(!showAllParent);
  };

  return (
    <div className="navigation">
      <div className="logo">
        <img className="logo-icon" src={logo} alt="logo" />
      </div>
      <div className="nav-parent">
        <div className="s-button" onClick={handleSButtonClick}>
          <img className="streamline_icon" alt="" src={streamline} />
          <div className="text">COLLECTION</div>
          {showAllParent && (
            <div className="all-parent">
              <b className="all">all</b>
              <div className="column">
              <div className="skin-care-parent">
                <b className="skin-care">Skin Care</b>
                <div className="facial-cleanser-parent">
                  <div className="facial-cleanser">Facial cleanser</div>
                  <div className="sunscreen-cream">Sunscreen cream</div>
                  <div className="moisturizing-cream">Moisturizing cream</div>
                  <div className="makeup-remover">Makeup remover</div>
                  <div className="toning-lotion">Toning lotion</div>
                  <div className="nourishing-serum">Nourishing serum</div>
                  <div className="exfoliating-scrub">Exfoliating scrub</div>
                  <div className="nourishing-face-mask">Nourishing face mask</div>
                </div>
              </div>
              </div>
              <div className="column">
              <div className="makeup-parent">
                <b className="skin-care">Makeup</b>
                <div className="lipstick-parent">
                  <div className="facial-cleanser">Lipstick</div>
                  <div className="sunscreen-cream">Foundation</div>
                  <div className="moisturizing-cream">Face powder</div>
                  <div className="makeup-remover">Mascara</div>
                  <div className="toning-lotion">Eyeshadow</div>
                  <div className="nourishing-serum">Blush</div>
                  <div className="exfoliating-scrub">Eyeliner</div>
                  <div className="nourishing-face-mask">Lip pencil</div>
                  <div className="loose-powder">Loose powder</div>
                </div>
              </div>
              </div>
            </div>
          )}
        </div>
        <div className="nav-button">
          <div className="text">HOT DEAL</div>
        </div>
        <div className="nav-button">
          <div className="text">BEST SELLER</div>
        </div>
        <div className="nav-button">
          <div className="text">ABOUT US</div>
        </div>
        <div className="nav-button">
          <div className="text">POLICY</div>
        </div>
        
      </div>
      <div className="icon-nav">
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
