import React from 'react';
import logo from '../Assets/Logo_white.svg';
import "./Footer.css";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img className="vector-icon" alt="" src={logo} />
      </div>
      <div className="product-parent">
        <div className="product">Product</div>
        <div className="contact">Contact</div>
        <div className="collection">Collection</div>
        <div className="term-condition">{`Term & Condition`}</div>
        <div className="site-map">Site Map</div>
        <div className="home">Home</div>
        <div className="about-us">About Us</div>
        <div className="group-child" />
      </div>
      <div className="collection-parent">
        <div className="site-map">Collection</div>
        <div className="group-item" />
        <div className="home">Facial Cleanser</div>
        <div className="product">Sunscreen Cream</div>
        <div className="collection">Moisturizing Cream</div>
        <div className="about-us">Makeup Remover</div>
        <div className="contact">Toning Lotion</div>
        <div className="term-condition">Nourishing Serum</div>
        <div className="exfoliating-scrub">Exfoliating Scrub</div>
        <div className="nourishing-face-mask">Nourishing Face Mask</div>
        <div className="lipstick">Lipstick</div>
        <div className="foundation">Foundation</div>
        <div className="face-powder">Face Powder</div>
        <div className="mascara">Mascara</div>
        <div className="eyeshadow">Eyeshadow</div>
        <div className="blush">Blush</div>
        <div className="eyeliner">Eyeliner</div>
        <div className="lip-pencil">Lip Pencil</div>
        <div className="loose-powder">Loose Powder</div>
      </div>
      <div className="contact-us-parent">
        <div className="contact-us">Contact us</div>
        <div className="group-inner" />
        <div className="frame-parent">
          <div className="icon-parent">
          <i className="icon bi bi-envelope"></i>
            <div className="thisisouremailgmailcom">
              thisisouremail@gmail.com
            </div>
          </div>
          <div className="icon-group">
          <i className="icon bi bi-telephone-fill"></i>
            <div className="thisisouremailgmailcom">(000) 000 0000</div>
          </div>
          <div className="icon-container">
          <i className="icon bi bi-geo-alt-fill"></i>
            <div className="thisisouremailgmailcom">
              Street Address #000, City, State, Zip ######
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
