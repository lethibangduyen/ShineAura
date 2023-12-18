
import React, { useState, useEffect } from 'react';
import { animateScroll } from 'react-scroll';

import React from 'react';
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
        <div className = 'productpage -shi'>

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
            </div>
    );
}
export default Productpage;