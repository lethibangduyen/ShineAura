import React from 'react';
import './Buttons.css';

/* Button 6: BUTTON BLACK FONT + TRANSPARENT BG*/
const Button_blackfont_transBG =({ buttonText }) => {
    return (
        <div>
            <button class="button_6">
                <div class="child-box_6"></div>
                <span>{buttonText}</span>
            </button>
        </div>
    );
}

export default Button_blackfont_transBG;