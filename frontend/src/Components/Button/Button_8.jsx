import React from 'react';
import './Buttons.css';

/* Button 8: ICON Arrow up-right + BUTTON BLACK */
const Button_8 = () => {
    return (
        <div>
            <button class="button_8">
                <div class="child-box_8"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                </svg>
                <span>BUTTON</span>
            </button>
        </div>
    );
}

export default Button_8;