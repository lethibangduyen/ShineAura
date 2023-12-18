import React from 'react';
import './Button_collection.css';

const Button_collection = () => {
    return (
        <div>
            <button className="but-collection">
                <div className="child-box_but-collection"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg>
                <span>COLLECTION</span>
            </button>
            <ul className="but-collection_dropdown-content">
                <li>
                    <ul>
                        <li><a className="but_title-list" href="#">ALL</a></li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li><a className="but_title-list" href="#">SKIN CARE</a></li>
                        <li> <a className="but_sub-title-list" href="#">CLEANSER</a></li>
                        <li> <a className="but_sub-title-list" href="#">SUNSCREEN CREAM</a></li>
                        <li> <a className="but_sub-title-list" href="#">MOISTURIZER</a></li>
                        <li> <a className="but_sub-title-list" href="#">MASK</a></li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li><a className="but_title-list" href="#">MAKE UP</a></li>
                        <li> <a className="but_sub-title-list" href="#">LIPSTICK</a></li>
                        <li> <a className="but_sub-title-list" href="#">FOUNDATION</a></li>
                        <li> <a className="but_sub-title-list" href="#">FACE POWDER</a></li>
                        <li> <a className="but_sub-title-list" href="#">MASCARA</a></li>
                        <li> <a className="but_sub-title-list" href="#">EYESHADOW</a></li>
                        <li> <a className="but_sub-title-list" href="#">BLUSH</a></li>
                        <li> <a className="but_sub-title-list"href="#">EYELINER</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Button_collection;