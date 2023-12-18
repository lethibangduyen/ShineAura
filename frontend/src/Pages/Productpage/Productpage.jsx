import React, { useState, useEffect } from 'react';
import { animateScroll } from 'react-scroll';
import NavBar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './Productpage.css';
import '../../Components/Assets/css/global.css';
import Heropic from '../../Components/Assets/Media/Product/Hero.png';
import High from '../../Components/Assets/Media/Product/Highlight_Product.png';
import Productcard from '../../Components/Productcard/product-card.jsx';
// import Buttonpro from '../../Components/Button/Button_blackfont_transBG.jsx';
import Button from '../../Components/Button/NewButton/button.jsx';

const Productpage = () => {
    
    const [isDragging, setIsDragging] = useState(false);
    const [startPosition, setStartPosition] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    const sensitivity = 2; // Adjust this factor to make it more or less sensitive

    const handleMouseDown = (e) => {
        e.preventDefault(); // Prevent default text selection behavior
        setIsDragging(true);
        setStartPosition(e.clientX - scrollPosition);
        document.querySelector('.prod-collection-scroll').style.cursor = 'grabbing';
    };
  
    const handleMouseMove = (e) => {
        if (!isDragging) return;
  
        requestAnimationFrame(() => {
            const newX = (e.clientX - startPosition) * sensitivity;
            setScrollPosition(newX);
  
            const scrollContainer = document.querySelector('.prod-collection-scroll');
            scrollContainer.scrollLeft = -newX;
        });
    };
  
    const handleMouseUp = () => {
        setIsDragging(false);
        document.querySelector('.prod-collection-scroll').style.cursor = 'grab';
    };
  
    useEffect(() => {
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
  
        return () => {
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    
    
    return (
        <div>
            <NavBar />
            <div className='main-container flex-col'>
                <div className='section-container flex-col'>
                    <div className='hero-sct section flex-col'>
                        <div className='img-slider'>
                            <img src={Heropic} alt="hero-img" />
                        </div>
                    </div>
                </div>
                <div className="section-container flex-col">
                    <div className="prod-query-sct section flex-col align-left">
                        <div className='promo-collection-sct flex-row'>
                            <div className='collection-img flex-col'>
                                <img src={High} alt="" />
                            </div>
                            <div className='vt-divider'></div>
                            <div className='collection-content flex-col gap-ms align-left'>
                                <h3 className='h3'>GLASTING WATER TINT COLLECTION</h3>
                                <div className='prod-collection-container prod-collection-scroll' onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
                                        <div className='prod-container-outer flex-row gap-xs'>
                                            <Productcard ></Productcard>
                                            <Productcard ></Productcard>
                                            <Productcard ></Productcard>
                                            <Productcard ></Productcard>
                                            <Productcard ></Productcard>
                                        </div>
                                    
                                </div>
                                <p className='lgt-body collection-description'>Content: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel tellus lectus. Sed sagittis, risus vitae dignissim semper, turpis arcu congue augue, eget ornare orci libero nec enim. Aenean a aliquam nunc.</p>
                            </div>
                        </div>
                        <div className='prod-query-content flex-row align-left'>
                            <div className="filter-container flex-col gap-ms align-left">
                                <div className="filter-sct flex-col align-left gap-sm">
                                    <h4 className='h4 filter-title'>COLLECTION</h4>
                                    <div className="sub-filter-container flex-col align-left">
                                        <Button text="BUTTON" btnStyle="underline-btn"></Button> 
                                        <Button text="BUTTON" btnStyle="underline-btn"></Button> 
                                        <Button text="BUTTON" btnStyle="underline-btn"></Button> 
                                        <Button text="BUTTON" btnStyle="underline-btn"></Button>
                                    </div>
                                </div>
                                <div className="hr-divider"></div>  
                                <div className="filter-sct flex-col align-left gap-sm">
                                    <h4 className='h4 filter-title'>COLLECTION</h4>
                                    <div className="sub-filter-container flex-col align-left">
                                        <Button text="BUTTON" btnStyle="underline-btn"></Button>
                                        <Button text="BUTTON" btnStyle="underline-btn"></Button>
                                        <Button text="BUTTON" btnStyle="underline-btn"></Button>
                                        <Button text="BUTTON" btnStyle="underline-btn"></Button>
                                    </div>
                                </div>
                                <div className="hr-divider"></div>  
                                <div className="filter-sct flex-col align-left gap-sm">
                                    <h4 className='h4 filter-title'>COLLECTION</h4>
                                    <div className="sub-filter-container flex-col align-left">
                                        <Button text="BUTTON" btnStyle="underline-btn"></Button>
                                        <Button text="BUTTON" btnStyle="underline-btn"></Button>
                                        <Button text="BUTTON" btnStyle="underline-btn"></Button>
                                        <Button text="BUTTON" btnStyle="underline-btn"></Button>
                                    </div>
                                </div>
                                <div className="hr-divider"></div>
                                <div className="filter-sct flex-col align-left gap-sm">
                                    <h4 className='h4 filter-title'>COLLECTION</h4>
                                    <div className="sub-filter-container flex-col align-left">
                                        <Button text="BUTTON" btnStyle="underline-btn"></Button>
                                        <Button text="BUTTON" btnStyle="underline-btn"></Button>
                                        <Button text="BUTTON" btnStyle="underline-btn"></Button>
                                        <Button text="BUTTON" btnStyle="underline-btn"></Button>
                                    </div>
                                </div>
                            </div>
                            <div className="vt-divider"></div>
                            <div className="prod-display flex-col align-left gap-md">
                                <div>
                                    <h3 className='h3'>PRODUCT SEARCH BY INDEX</h3>
                                </div>
                                <div className="prod-grid gap-xs">
                                    <Productcard></Productcard>
                                    <Productcard></Productcard>
                                    <Productcard></Productcard>
                                    <Productcard></Productcard>
                                    <Productcard></Productcard>
                                    <Productcard></Productcard>
                                    <Productcard></Productcard>
                                    <Productcard></Productcard>
                                    <Productcard></Productcard>
                                    <Productcard></Productcard>
                                    <Productcard></Productcard>
                                    <Productcard></Productcard>
                                    <Productcard></Productcard>
                                    <Productcard></Productcard>
                                    <Productcard></Productcard>
                                    <Productcard></Productcard>
                                    <Productcard></Productcard>
                                    <Productcard></Productcard>
                                    <Productcard></Productcard>
                                    <Productcard></Productcard>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
            {/* <div className="productpage-first">
                <div className="productpage-collection-first flex-row section-container">
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
            </div> */}
            <Footer />
        </div>
    );
}
export default Productpage;