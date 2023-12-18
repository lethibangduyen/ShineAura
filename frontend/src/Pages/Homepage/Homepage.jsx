import React from 'react';
import Pic1 from '../../Components/Assets/Media/Homepage/Hero_1.png';
import Pic2 from '../../Components/Assets/Media/Homepage/Hero_2.png';
import Pic3 from '../../Components/Assets/Media/Homepage/Hero_3.png';
import About1 from '../../Components/Assets/Media/Homepage/About_1.png';
import About2 from '../../Components/Assets/Media/Homepage/About_2.png';
import About3 from '../../Components/Assets/Media/Homepage/About_3.png';
import About4 from '../../Components/Assets/Media/Homepage/About_4.png';
import './Homepage.css'
import Collection from '../../Components/Pagecomponents/Homepage_com/Collections.jsx';
import '../../Components/Assets/css/global.css';
import Productcard from '../../Components/Productcard/product-card.jsx';
import Button from '../../Components/Button/Button_blackfont_transBG_IcArrow.jsx';
const Homepage = () => {
  return (
    <div className='homepage-shine'>
      <div className="homepage-first">
        <div className="pic-parent">
          <img className="pic-1" alt="" src={Pic1} />
          <img className="pic-2" alt="" src={Pic2} />
          <img className="pic-3" alt="" src={Pic3} />
        </div>
        <div className="text-1">
          <div className="shineaura h1">SHINEAURA</div>
          <div className="connect-with-radiant subtitle ">CONNECT WITH RADIANT BEAUTY</div>
          <div className="text body">
            In a world where beauty never stops evolving, ShineAura is your destination to transform beauty into an art form. We bring diversity, quality, and style from renowned cosmetics brands worldwide. Join us
            in experiencing and expressing your unique beauty through the
            limitless choices at ShineAura.
          </div>
        </div>
      </div>
      <div className="home-product">
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
          <Button buttonText="See More" IconClass="bi bi-arrow-right"/>
        </div>
        </div>
        <div className = 'home-btn-see'>
       
      </div>
      <div class="home-aboutus flex-row ">
        <div class="about-us-parent flex-col">
          <div className="text-aboutus">
            <div class="about-us h1">ABOUT US</div>
            <div class="text-content body">
              <p class="content-aboutus">
                Discover the pinnacle of beauty at ShineAura, where we redefine the
                cosmetic experience beyond ordinary standards. As your discerning
                companion on the journey to magnify and honor your innatespirational force, urging you to explore
                and indulge in the captivating world of beauty.
              </p>
              <p class="content-aboutus">&nbsp;</p>
              <p class="content-aboutus">
                ShineAura not only delivers convenience but also presents a
                meticulously chosen array of products, ensuring your diverse beauty
                needs are met with unparalleled excellence. Beyond cosmetics, we
                prioritize your satisfaction with the highest standards of privacy
                and security, guaranteeing a seamless and secure online shopping
                experience.
              </p>
              <p class="content-aboutus">&nbsp;</p>
              <p class="content-aboutus">
                Join us in this refined and sophisticated beauty expedition, where
                ShineAura emerges not only as a provider of exceptional products but
                also as a symbol of irresistibly elegant allure. Step into a realm
                of perpetual charm and make ShineAura your definitive destination
                for an unparalleled beauty experience.
              </p>
            </div>
          </div>
        </div>
        <div class="img-container">
          <div class="image-box">
            <img class="img1" src={About1} />
            <img class="img2" src={About2} />
            <img class="img3" src={About3} />
            <img class="img4" src={About4} />
          </div>
        </div>
      </div>
      <div className="wireframe-5 flex-col gap-3xl">
        <div className="collection-contaniner flex-col align-left gap-md">
          <div className="text-coll h1"> COLLECTIONS</div>
          <Collection />
        </div>
      </div>
      <div className="wireframe-6 flex-col">
        <div className="flex-row contact-container gap-2xl">
          <div className="image-contact">
          </div>
          <div className="contact-content flex-col align-left">
            <div className="text-contact flex-col align-left gap-sm">
              <p className="Contact-us h1"> CONTACT US</p>
              <p className="text-contact2 body">Need assistance or have questions? Don't hesitate to get in touch with us. ShineAura's customer care team is available 24/7 to assist you. Let us know how we can help. We're here to listen and ensure you have the best shopping experience on ShineAura.</p>
              <div className="flex-col text-contact-icon  align-left gap-xs ">
                <div className='flex-row gap-xs body-bld'>
                  <i className="bi bi-envelope-fill"></i>
                  <p>shineaura.cosmetic@gmail.com</p>
                </div>
                <div className='flex-row gap-xs body-bld'>
                  <i className=" bi bi-telephone-fill"></i>
                  <p>+84 123 456 789</p>

                </div>
                <div className='flex-row gap-xs  '>
                  <i className="bi bi-geo-alt-fill"></i>
                  <p>Thu Duc Viet Nam</p>
                </div>
              </div>

            </div>
            <div className="contact-our-media flex-col gap-sm">
              <div className='gap-sm'>Contact our medias:</div>
              <div className="flex-row gap-sm">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-messenger"></i>
                <i className="bi bi-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

  );
}
export default Homepage;