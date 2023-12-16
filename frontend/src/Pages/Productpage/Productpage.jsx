import React from 'react';
import NavBar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './Productpage.css';
import '../../Components/Assets/css/global.css';
import Heropic from '../../Components/Assets/Media/Product/Hero.png';
import High from '../../Components/Assets/Media/Product/Highlight_Product.png';
import Productcard from '../../Components/Productcard/product-card.jsx';
import Buttonpro from '../../Components/Button/Button_blackfont_transBG.jsx';

const Productpage = () => {
    return (
        <div>
            <NavBar />
            <div className="productpage-first">

                <div className="productpage-collection-first flex-row">
                    <button className="productpage-btn left">
                        <i className="bi bi-chevron-left align-left"></i>
                    </button>
                    <div className="productpage-img">
                        <img className="propage-img" alt="" src={Heropic} />
                    </div>
                    <button className="productpage-btn right">
                        <i className="bi bi-chevron-right align-right"></i>
                    </button>
                </div>

            </div>
            <div className="productpage-second flex-row">
                <div className="productpage-collection-high flex-row align-self flex-left-align ">
                    <div className="pro-collect2-container flex-col gap-md">
                        <div className="pro-collect2-hight flex-col gap-md align-right">
                            <img className="pro-collect2-img" alt="" src={High} />
                        </div>
                    </div>
                    <div
                        className="productpage-collect2-content flex-col align-left gap-ms">
                        <div className="productpage-collect2-tit h3-in ">Glassting water tint collection
                        </div>
                        <div className="productpage-collect2-card flex-row ">
                            <Productcard />
                            <Productcard />
                            <Productcard />
                            <Productcard />
                            <div className="">
                                <button className="productpage-collect1-btn">
                                    <i className="bi bi-chevron-right"></i></button>

                            </div>
                        </div>

                        <div className='flex-row flex-left-align gap-2xl '>
                            <div className="productpage-collect2-title body-lgt ">Content: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel tellus lectus. Sed sagittis, risus vitae dignissim semper, turpis arcu congue augue, eget ornare orci libero nec enim. Aenean a aliquam nunc.
                            </div>
                            <div className="productpage-collect2-btn align-right">
                                <button className="productpage-btn2 flex-row ">
                                    <p className='body-lgt '>View all <i className="bi bi-chevron-down"></i> </p>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="productpage-collection-third flex-row align-left">
                <div className="productpage-collection-catalog flex-row align-left gap-2xl">
                    <div className="productpage-collect3-catalog flex-col align-left gap-ms">
                        <div className="collect3-catalog-collection flex-col align-left gap-sm">
                            <div className='h4 align-self'>COLLECTIONS</div>
                            <div className="collect3-catalog-collection-btn">
                                <div className="productpage-button">
                                    <Buttonpro buttonText="COLLECTION 1" />
                                </div>
                                <div className="productpage-button">
                                    <Buttonpro buttonText="COLLECTION 2" />
                                </div>
                                <div className="productpage-button">
                                    <Buttonpro buttonText="COLLECTION 3" />
                                </div>
                                <div className="productpage-button">
                                    <Buttonpro buttonText="COLLECTION 4" />
                                </div>
                                <div className="productpage-button">
                                    <Buttonpro buttonText="COLLECTION 5" />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="collect3-catalog-collection flex-col align-left gap-sm">
                            <div className='h4 align-self'>CATEGORY</div>
                            <div className="collect3-catalog-category-btn">
                                <div className="productpage-button">
                                    <Buttonpro buttonText="CLEANSER" />
                                </div>
                                <div className="productpage-button">
                                    <Buttonpro buttonText="SUNSCREEN CREAM" />
                                </div>
                                <div className="productpage-button">
                                    <Buttonpro buttonText="MOISTURIZER" />
                                </div>
                                <div className="productpage-button">
                                    <Buttonpro buttonText="MASK" />
                                </div>
                                <div className="productpage-button">
                                    <Buttonpro buttonText="LIPSTICK" />
                                </div>
                                <div className="productpage-button">
                                    <Buttonpro buttonText="FOUNDATION" />
                                </div>
                                <div className="productpage-button">
                                    <Buttonpro buttonText="FACE POWDER" />
                                </div>
                                <div className="productpage-button">
                                    <Buttonpro buttonText="MASCARA" />
                                </div>
                                <div className="productpage-button">
                                    <Buttonpro buttonText="EYESHADOW" />
                                </div>
                                <div className="productpage-button">
                                    <Buttonpro buttonText="EYELINER" />
                                </div>
                                <div className="productpage-button">
                                    <Buttonpro buttonText="BLUSH" />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="collect3-catalog-brand flex-col align-left gap-sm">
                            <div className='h4 align-self'>BRAND</div>
                            <div className="collect3-catalog-brand-btn">
                                <div className="productpage-button">
                                    <Buttonpro buttonText="3CE" />
                                </div>
                                <div className="productpage-button">
                                    <Buttonpro buttonText="ROMAN" />
                                </div>
                                <div className="productpage-button">
                                    <Buttonpro buttonText="MERZY" />
                                </div>
                                <div className="productpage-button">
                                    <Buttonpro buttonText="PERIPERA" />
                                </div>
                                <div className="productpage-button">
                                    <Buttonpro buttonText="CLIO" />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="collect3-catalog-price flex-col align-left gap-sm">
                            <div className='h4 align-self'>PRICE RANGE</div>
                            <div className="collect3-catalog-price-btn">
                                <div className="productpage-button">
                                    <Buttonpro buttonText="PRICE RANGE 1" />
                                </div>
                                <div className="productpage-button">
                                    <Buttonpro buttonText="PRICE RANGE 2" />
                                </div>
                                <div className="productpage-button">
                                    <Buttonpro buttonText="PRICE RANGE 3" />
                                </div>
                                <div className="productpage-button">
                                    <Buttonpro buttonText="PRICE RANGE 4" />
                                </div>
                                <div className="productpage-button">
                                    <Buttonpro buttonText="PRICE RANGE 5" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="productpage-collection-search flex-col gap-md">
                    <div className="product-collect3-search flex-row gap-md">
                        <div className="product-collect3-search-title h3">PRODUCT SEARCH BY INDEX</div>
                        <div className="product-collect3-search-bar ">
                            <button className="product-collect3-search-btn">
                                <i className="bi bi-search"></i>
                            </button>
                            <input className="product-collect3-search-input" type="text" placeholder="Search" />
                        </div>
                        <div>
                            <select id="sort" name="sort">
                                <option value="Sort" selected>Sort by</option>
                                <option value="saab">Saab</option>
                                <option value="fiat">Fiat</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>

                    </div>
                    <div className="product-collect3-search-card">
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Productpage;