import React from 'react';
import NavBar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Pic1 from '../../Components/Assets/Media/Homepage/Pic_1.png';
import "./Homepage.css";

const Homepage = () => {
  return (
    <div>
      <NavBar />
      <div className="wireframe-2">
        <div className="pic-1-parent">
          <img className="pic-1-icon" alt="" src={Pic1} />
          {/* <img className="pic-2-icon" alt="" src={Pic2} />
          <img className="pic-3-icon" alt="" src={Pic3} /> */}
        </div>
        <div className="shineaura">SHINEAURA</div>
        <div className="connect-with-radiant">CONNECT WITH RADIANT BEAUTY</div>
        <div className="text">
          In a world where beauty never stops evolving, ShineAura is your
          destination to transform beauty into an art form. We bring diversity,
          quality, and style from renowned cosmetics brands worldwide. Join us
          in experiencing and expressing your unique beauty through the
          limitless choices at ShineAura.
        </div>
        </div>
        <div className="wireframe-3">
          <div className="products">PRODUCTS</div>
          <div className="at-shineaura-we">
            At ShineAura, we take pride in offering a diverse collection of beauty
            products from world-renowned brands. Embrace and express your individual
            beauty with limitless choices from ShineAura.
          </div>
          <div className="rectangle-parent">
            <div className="group-child" />
            <i className="next bi bi-chevron-compact-left"></i>
          </div>
          <div className="rectangle-group">
            <div className="group-child" />
            <i class="next bi bi-chevron-compact-right"></i>
          </div>
          <div className="product-card-parent">
            <div className="product-card">
              <div className="rectangle-container">
                <div className="group-inner" />
                <div className="ce-hazy-lip">3CE HAZY LIP CLAY</div>
                <i className="usd">$20 USD</i>
                <div className='group-icon'>
                  <i className="bi bi-heart"></i>
                  <i className="bi bi-cart-plus"></i>
                  <i className="bi bi-check2-square"></i>
                </div>
              </div>
              <div className="product-card-child" />
              <img className="image-52-icon" alt="" src="../../Components/Assets/Media/Product/product.png" />
              <img className="product-card-item" alt="" src="../../Components/Assets/color.png" />
            </div>
          </div>
          <div className="underline-button">
            <div className="button-parent">
              <div className="button">See more</div>
              <img className="icon" alt="" src="/icon.svg" />
            </div>
          </div>
        </div>
      
      <Footer />
    </div>
  );
}
export default Homepage;