import React from 'react';
import './Navbar.css';
import './Global.css';
import logo from '../Assets/Logo.png';
import cart_icon from '../Assets/cart_icon.svg';
import streamline from '../Assets/streamline.svg';
import search_icon from '../Assets/bi_search.svg';
import people_icon from '../Assets/icon_people.svg';

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
            <div className="navigation">
                    <img className="logo_icon" src={logo} alt="logo" />
                    <div className="frame-parent">
                        <div className="streamlineinterface">
                            <img
                                className="streamline_icon"
                                alt=""
                                src={streamline}
                            />
                            <div className="collection">COLLECTION</div>
                        </div>
                        <div className="hot-deal">HOT DEAL</div>
                        <div className="best-seller">BEST SELLER</div>
                        <div className="about-us">ABOUT US</div>
                        <div className="policy">POLICY</div>
                    </div>
                    <div className="icon-parent">
                        <img className="icon" alt="" src={cart_icon} />
                        <img className="icon" alt="" src={search_icon} />
                        <img className="icon" alt="" src={people_icon} />
                    </div>
                </div>
      </div>
    </div>
  );
};

export default Navbar;
