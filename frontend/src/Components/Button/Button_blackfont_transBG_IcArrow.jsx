import React from 'react';
import PropTypes from 'prop-types';
import './Buttons.css';

/* Button 7: BUTTON BLACK + ICON Arrow up-right */
const ButtonBlackFontTransBGIcArrow = ({ buttonText, IconClass }) => {
    return (
        <div>
            <button className="button_7">
                <div className="child-box_7"></div>
                <span>{buttonText}</span>
                <i className={`bi ${IconClass}`}></i>
            </button>
        </div>
    );
}

ButtonBlackFontTransBGIcArrow.propTypes = {
    buttonText: PropTypes.string.isRequired,
    arrowIconClass: PropTypes.string.isRequired,
};

export default ButtonBlackFontTransBGIcArrow;
