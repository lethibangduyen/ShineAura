import React from 'react';
import './Collections.css';
import '../../Assets/css/global.css';
import All from '../../Assets/Media/Homepage/Collections/All.jpg';
import Eyes from '../../Assets/Media/Homepage/Collections/Eyeshadow.jpg';
import Face from '../../Assets/Media/Homepage/Collections/Facepowder.png';
import Eyeliner from '../../Assets/Media/Homepage/Collections/Eyeliner.png';
import Lips from '../../Assets/Media/Homepage/Collections/Lipstick.jpg';
import Blush1 from '../../Assets/Media/Homepage/Collections/Blush.jpg';
import Cleanser from '../../Assets/Media/Homepage/Collections/Cleanser.jpg';
import Mask from '../../Assets/Media/Homepage/Collections/Mask.jpg';
import Moisturizer from '../../Assets/Media/Homepage/Collections/MOISTURIZER.jpg';
import Mascara from '../../Assets/Media/Homepage/Collections/Mascara.jpg';
import Foundation from '../../Assets/Media/Homepage/Collections/Foundation.jpg';
import Sunscreen from '../../Assets/Media/Homepage/Collections/Sunscreen.jpg';
const Collections = () => {
    return (
        <div>
            <div className="home-collection">
            <div className="collection-card-list">
                <a href="#" className="collection-card-item">
                    <img src={All} alt="All" />
                    <p className="text-collection h4">ALL</p>
                </a>
            </div>
            <div className="collection-card-list">
                <a href="#" className="collection-card-item">
                    <img src={Lips} />
                    <p className="text-collection h4">LIPSTICKS</p>
                </a>
            </div>
            <div className="collection-card-list">
                <a href="#" className="collection-card-item">
                    <img src={Foundation} />
                    <p className="text-collection h4">FOUNDATION</p>
                </a>
            </div>
            <div className="collection-card-list">
                <a href="#" className="collection-card-item">
                    <img src={Face} />
                    <p className="text-collection h4">FACEPOWER</p>
                </a>
            </div>
            <div className="collection-card-list">
                <a href="#" className="collection-card-item">
                    <img src={Mascara} />
                    <p className="text-collection h4">MASCARA</p>
                </a>
            </div>
            <div className="collection-card-list">
                <a href="#" className="collection-card-item">
                    <img src={Eyes} />
                    <p className="text-collection h4">EYESHADOW</p>
                </a>
            </div>
            <div className="collection-card-list">
                <a href="#" className="collection-card-item">
                    <img src={Eyeliner} />
                    <p className="text-collection h4">EYELINER</p>
                </a>
            </div>
            <div className="collection-card-list">
                <a href="#" className="collection-card-item">
                    <img src={Mask} />
                    <p className="text-collection h4">MASK</p>
                </a>
            </div>
            <div className="collection-card-list">
                <a href="#" className="collection-card-item">
                    <img src={Cleanser} />
                    <p className="text-collection h4">CHEANSER</p>
                </a>
            </div>
            <div className="collection-card-list">
                <a href="#" className="collection-card-item">
                    <img src={Blush1} />
                    <p className="text-collection h4">BRUSHES</p>
                </a>
            </div>
            <div className="collection-card-list">
                <a href="#" className="collection-card-item">
                    <img src={Sunscreen} />
                    <p className="text-collection h4">SUNSCEEN</p>
                </a>
            </div>
            <div className="collection-card-list">
                <a href="#" className="collection-card-item">
                    <img src={Moisturizer} />
                    <p className="text-collection h4">MOISTURIZER</p>
                </a>
            </div>
        </div>
        </div>
    );
};

export default Collections;
