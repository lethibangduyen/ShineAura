import React from 'react';
import './Buttons.css';


const Button_collection = () => {
    return (
        <div class="nav-collection">
            <button class="collection-button">
                <div class="child-box_collection"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg>
                <span>COLLECTION</span>
            </button>
            <ul class="collection-dropdown-content">
                <li>
                    <ul>
                        <li><a class="title-list" href="#">ALL</a></li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li><a class="title-list" href="#">SKIN CARE</a></li>
                        <li> <a href="#">CLEANSER</a></li>
                        <li> <a href="#">SUNSCREEN CREAM</a></li>
                        <li> <a href="#">MOISTURIZER</a></li>
                        <li> <a href="#">MASK</a></li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li><a class="title-list" href="#">MAKE UP</a></li>
                        <li> <a href="#">LIPSTICK</a></li>
                        <li> <a href="#">FOUNDATION</a></li>
                        <li> <a href="#">FACE POWDER</a></li>
                        <li> <a href="#">MASCARA</a></li>
                        <li> <a href="#">EYESHADOW</a></li>
                        <li> <a href="#">BLUSH</a></li>
                        <li> <a href="#">EYELINER</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Button_collection;