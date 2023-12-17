import React from 'react';
import logo from '../Assets/Logo.svg';
import "./Footer.css";
import Buttonfooter from '../Button/Button_whitefont_transBG';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img className="footer-vector-icon" alt="" src={logo} />
      </div>
      <div className="footer-container">
        <div className="footer-sitemap">
          <div className="footer-sitemap-title h4">
            <p>Sitemap</p> <hr />
          </div>
          <div className=" flex-col footer-sitemap-content align-left ">
            <div className="footer-button">
              <Buttonfooter buttonText="Home" />
            </div>
            <div className="footer-button">
              <Buttonfooter buttonText="Product" />
            </div>
            <div className="footer-button">
              <Buttonfooter buttonText="Collection" />
            </div>
            <div className="footer-button">
              <Buttonfooter buttonText="Contact" />
            </div>
            <div className="footer-button">
              <Buttonfooter buttonText="Term & Condition" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-collection">
        <div className="footer-collection">
          <div className="footer-collection-title h4">
            <p>Collections</p> <hr />
          </div>
          <div className=" footer-collection-content flex-row align-left ">
            <div className="footer-button-left">
              <div className="footer-button">
                <Buttonfooter buttonText="Cleanser" />
              </div>
              <div className="footer-button">
                <Buttonfooter buttonText="Sunscreen Cream" />
              </div>
              <div className="footer-button">
                <Buttonfooter buttonText="Moisturizer" />
              </div>
              <div className="footer-button">
                <Buttonfooter buttonText="Mask" />
              </div>
            </div>
            <div className="footer-button-right">
              <div className="footer-button">
                <Buttonfooter buttonText="Lipstick " />
              </div>
              <div className="footer-button">
                <Buttonfooter buttonText="Foundation " />
              </div>
              <div className="footer-button">
                <Buttonfooter buttonText="Face Powder " />
              </div>
              <div className="footer-button">
                <Buttonfooter buttonText="Mascara " />
              </div>
              <div className="footer-button">
                <Buttonfooter buttonText="Eyeshadow " />
              </div>
              <div className="footer-button">
                <Buttonfooter buttonText="Blush " />
              </div>
              <div className="footer-button">
                <Buttonfooter buttonText="Eyeliner " />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-contact">
      <div className="footer-contact-title h4">
            <p>Contact Us</p> <hr />
          </div>
          <div className=" flex-col footer-contact-content align-left gap-xs">
          <div className='flex-row gap-xs body-lgt'>
                  <i class="bi bi-envelope"></i>
                  <p>shineaura.cosmetic@gmail.com</p>
                </div>
                <div className='flex-row gap-xs body-lgt'>
                  <i class=" bi bi-telephone"></i>
                  <p>+84 123 456 789</p>

                </div>
                <div className='flex-row gap-xs body-lgt '>
                  <i class="bi bi-geo-alt"></i>
                  <p>Thu Duc Viet Nam</p>
                </div>
          </div>
        </div>
      </div>
  );
};

export default Footer;
