import React from 'react';
import './homepage.css'

import Pic1 from '../../assets/img/homepage/hero-1.png';
import Pic2 from '../../assets/img/homepage/hero-2.png';
import Pic3 from '../../assets/img/homepage/hero-3.png';
import About1 from '../../assets/img/homepage/about-1.png';
import About2 from '../../assets/img/homepage/about-2.png';
import About3 from '../../assets/img/homepage/about-3.png';
import About4 from '../../assets/img/homepage/about-4.png';
import Contact from '../../assets/img/homepage/contact-us.png';
import Collection from '../../components/homepage/collection/collection.jsx';
import Productcard from '../../components/common/product-card/product-card.jsx';
import Button from '../../components/common/button/button.jsx';

const Homepage = () => {
  return (
    <div className='homepage-shine'>
      <div className='homepage-shine-container'>
        <div className="homepage-first">
          <div className="pic-parent">
            <img className="pic-1" alt="" src={Pic1} />
            <img className="pic-2" alt="" src={Pic2} />
            <img className="pic-3" alt="" src={Pic3} />
          </div>
          <div className="hero-text flex-col gap-sm">
            <div className='title flex-col gap-sm'>
              <div className="shineaura h1">SHINEAURA</div>
              <div className="connect-with-radiant subtitle ">CONNECT WITH RADIANT BEAUTY</div>
            </div>
            <div className="content body">
              In a world where beauty never stops evolving, ShineAura is your destination to transform beauty into an art form. We bring diversity, quality, and style from renowned cosmetics brands worldwide. Join us
              in experiencing and expressing your unique beauty through the
              limitless choices at ShineAura.
            </div>
          </div>
        </div>
        <div className="home-product flex-row">
          <div className="home-product-container flex-col gap-md">
            <div className="text-product">
              <div className="products h1">PRODUCTS</div>
              <div className="at-shineaura-we body">
                At ShineAura, we take pride in offering a diverse collection of beauty
                products from world-renowned brands. Embrace and express your individual
                beauty with limitless choices from ShineAura.
              </div>
            </div>
            <div className="product-parent-detail flex-row gap-md">
              <button className="home-btn left">
                <i className="bi bi-chevron-left"></i>
              </button>
              <div className="home-list-product flex-row">
                <Productcard />
                <Productcard />
                <Productcard />
                <Productcard />
              </div>
              <button className="home-btn right">
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
            <div className='home-btn-see'>
              <Button buttonText="See More" IconClass="bi bi-arrow-right" />
            </div>
          </div>
        </div>

        <div className="home-aboutus flex-row ">
          <div className="about-us-parent flex-col">
            <div className="text-aboutus">
              <div className="about-us h1">ABOUT US</div>
              <div className="text-content body">
                <p className="content-aboutus">
                  Discover the pinnacle of beauty at ShineAura, where we redefine the
                  cosmetic experience beyond ordinary standards. As your discerning
                  companion on the journey to magnify and honor your innatespirational force, urging you to explore
                  and indulge in the captivating world of beauty.
                </p>
                <p className="content-aboutus">&nbsp;</p>
                <p className="content-aboutus">
                  ShineAura not only delivers convenience but also presents a
                  meticulously chosen array of products, ensuring your diverse beauty
                  needs are met with unparalleled excellence. Beyond cosmetics, we
                  prioritize your satisfaction with the highest standards of privacy
                  and security, guaranteeing a seamless and secure online shopping
                  experience.
                </p>
                <p className="content-aboutus">&nbsp;</p>
                <p className="content-aboutus">
                  Join us in this refined and sophisticated beauty expedition, where
                  ShineAura emerges not only as a provider of exceptional products but
                  also as a symbol of irresistibly elegant allure. Step into a realm
                  of perpetual charm and make ShineAura your definitive destination
                  for an unparalleled beauty experience.
                </p>
              </div>
            </div>
          </div>
          <div className="img-container">
            <div className="image-box">
              <img className="img1" src={About1} />
              <img className="img2" src={About2} />
              <img className="img3" src={About3} />
              <img className="img4" src={About4} />
            </div>
          </div>
        </div>
        <div className="wireframe-5 flex-col gap-3xl">
          <div className="collection-contaniner flex-col align-left gap-md">
            <div className="text-coll h1"> COLLECTIONS</div>
            <Collection/>
          </div>
        </div>
        <div className="wireframe-6 flex-col">
          <div className="flex-row contact-container gap-2xl">
            <div className="image-contact">
              <img src={Contact} alt="" />
            </div>
            <div className="contact-content flex-col align-left">
              <div className="text-contact flex-col align-left gap-sm">
                <p className="Contact-us h1"> CONTACT US</p>
                <p className="text-contact2 body">Need assistance or have questions? Don't hesitate to get in touch with us. ShineAura's customer care team is available 24/7 to assist you. Let us know how we can help. We're here to listen and ensure you have the best shopping experience on ShineAura.</p>
                <div className="flex-col text-contact-icon  align-left gap-xs body-bld">
                  <div className='flex-row gap-xs'>
                    <i className="bi bi-envelope-fill"></i>
                    <p>shineaura.cosmetic@gmail.com</p>
                  </div>
                  <div className='flex-row gap-xs'>
                    <i className=" bi bi-telephone-fill"></i>
                    <p>+84 123 456 789</p>

                  </div>
                  <div className='flex-row gap-xs'>
                    <i className="bi bi-geo-alt-fill"></i>
                    <p>Thu Duc Viet Nam</p>
                  </div>
                </div>

              </div>
              <div className="contact-our-media flex-col gap-sm align-left">
                <div className='body'>Contact our medias:</div>
                <div className="flex-row gap-sm align-left">
                  <i className="bi bi-facebook media-icon"></i>
                  <i className="bi bi-messenger media-icon"></i>
                  <i className="bi bi-instagram media-icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;