import React from 'react';
import logo from '../Assets/Logo.svg';
import "./Footer.css";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img className="footer-vector-icon" alt="" src={logo} />
      </div>
      <div className="site-map-parent">
        <div className="site-map">Site Map</div>
        <div className="footer-frame-child" />
        <div className="underline-button-parent">
          <div className="underline-button">
            <div className="footer-button-wrapper">
              <div className="footer-button">Home</div>
            </div>
          </div>
          <div className="underline-button1">
            <div className="footer-button-wrapper">
              <div className="footer-button">Product</div>
            </div>
          </div>
          <div className="underline-button2">
            <div className="footer-button-wrapper">
              <div className="footer-button">Collection</div>
            </div>
          </div>
          <div className="underline-button3">
            <div className="footer-button-wrapper">
              <div className="footer-button">About Us</div>
            </div>
          </div>
          <div className="underline-button4">
            <div className="footer-button-wrapper">
              <div className="footer-button">Contact</div>
            </div>
          </div>
          <div className="underline-button5">
            <div className="footer-button-wrapper">
              <div className="footer-button">Term & Condition</div>
            </div>
          </div>
        </div>
      </div>
      <div className="collection-parent">
        <div className="site-map">Collection</div>
        <div className="footer-frame-item" />
        <div className="footer-frame-parent">
          <div className="underline-button-group">
            <div className="underline-button6">
              <div className="footer-button-wrapper">
                <div className="footer-button">Cleanser</div>
              </div>
            </div>
            <div className="underline-button6">
              <div className="footer-button-wrapper">
                <div className="footer-button">Sunscreen Cream</div>
              </div>
            </div>
            <div className="underline-button6">
              <div className="footer-button-wrapper">
                <div className="footer-button">Moisturizer</div>
              </div>
            </div>
            <div className="underline-button6">
              <div className="footer-button-wrapper">
                <div className="footer-button">Mask</div>
              </div>
            </div>
          </div>
          <div className="underline-button-group">
            <div className="underline-button6">
              <divfooter- className="footer-button-wrapper">
                <div className="footer-button">{`Lipstick `}</div>
              </divfooter->
            </div>
            <div className="underline-button6">
              <div className="footer-button-wrapper">
                <div className="footer-button">Foundation</div>
              </div>
            </div>
            <div className="underline-button6">
              <div className="footer-button-wrapper">
                <div className="footer-button">Face Powder</div>
              </div>
            </div>
            <div className="underline-button6">
              <div className="footer-button-wrapper">
                <div className="footer-button">Mascara</div>
              </div>
            </div>
            <div className="underline-button6">
              <div className="footer-button-wrapper">
                <div className="footer-button">Eyeshadow</div>
              </div>
            </div>
            <div className="underline-button6">
              <div className="footer-button-wrapper">
                <div className="footer-button">Blush</div>
              </div>
            </div>
            <div className="underline-button6">
              <div className="footer-button-wrapper">
                <div className="footer-button">Eyeliner</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-us-parent">
        <div className="site-map">Contact us</div>
        <div className="footer-frame-inner" />
        <div className="underline-button-parent1">
          <div className="underline-button17">
            <div className="footer-icon-parent">
            <i className="icon bi bi-envelope"></i>
              <div className="footer-button">thisisouremail@email.com</div>
            </div>
          </div>
          <div className="underline-button17">
            <div className="footer-icon-parent">
            <i className="icon bi bi-telephone-fill"></i>
              <div className="footer-button">(000) 000 0000</div>
            </div>
          </div>
          <div className="underline-button17">
            <div className="footer-icon-parent">
            <i className="icon bi bi-geo-alt-fill"></i>
              <div className="footer-button">
                Street Address #000, City, State, Zip ######
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-our-medias-parent">
        <div className="contact-our-medias">Contact our medias:</div>
        <i className="icon3 bi bi-facebook"></i>
        <i className="icon4 bi bi-messenger"></i>
        <i className="icon5 bi bi-instagram"></i>
      </div>
    </div>
  );
};

export default Footer;
