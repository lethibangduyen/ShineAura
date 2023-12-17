import React from 'react';
import './Buttons.css';

/* Button 9: BUTTON WHITE + TRANSPARENT BG*/
const Button_whitefont_transBG = ({ buttonText }) => {
    return (
        <div>
            <button className="button_9">
                <div className="child-box_9"></div>
                <span>{buttonText}</span>
            </button>
        </div>
    );
}

export default Button_whitefont_transBG;