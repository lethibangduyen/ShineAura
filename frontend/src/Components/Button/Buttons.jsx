import React from 'react';
import './Buttons.css';

function Buttons() {
    return (
        <div>
            <div>
                <button className="buy-now-button">
                    <svg className="icon-bg" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                    <span>BUY NOW</span>
                </button>
            </div>

            <hr></hr>

            <div>
                <button className="button_1">
                    <span>BUTTON</span>
                </button>
            </div>

            <hr></hr>

            <div>
                <button className="button_2">
                    <span>BUTTON</span>
                </button>
            </div>

            <hr></hr>

            <div>
                <button className="button_3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                    <span>BUTTON</span>
                </button>
            </div>

            <hr></hr>

            <div>
                <button className="button_4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                    <span>BUTTON</span>
                </button>
            </div>

            <hr></hr>

            <div>
                <button className="button_5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                </button>
            </div>

            <hr></hr>

            <div className="collection">
                <button className="collection-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                    <span>COLLECTION</span>
                </button>
                <ul className="collection-dropdown-content">
                    <li>
                        <ul>
                            <li><a className="title-list" href="#">ALL</a></li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li><a className="title-list" href="#">SKIN CARE</a></li>
                            <li><a href="#">FACIAL CLEANSER</a></li>
                            <li><a href="#">SUNSCREEN CREAM</a></li>
                            <li><a href="#">MOISTURIZING CREAM</a></li>
                            <li><a href="#">MAKEUP REMOVER</a></li>
                            <li><a href="#">TONING LOTION</a></li>
                            <li><a href="#">NOURISHING SERUM</a></li>
                            <li><a href="#">EXFOLIATING SCRUB</a></li>
                            <li><a href="#">NOURISHING FACE MASK</a></li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li><a className="title-list" href="#">MAKE UP</a></li>
                            <li><a href="#">LIPSTICK</a></li>
                            <li><a href="#">FOUNDATION</a></li>
                            <li><a href="#">FACE POWDER</a></li>
                            <li><a href="#">MASCARA</a></li>
                            <li><a href="#">EYESHADOW</a></li>
                            <li><a href="#">BLUSH</a></li>
                            <li><a href="#">EYELINER</a></li>
                            <li><a href="#">LIP PENCIL</a></li>
                            <li><a href="#">LOOSE POWDER</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        );
    }

export default Buttons;
