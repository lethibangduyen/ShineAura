import React from 'react';
import './Button_blackfont_transBG.css';
import PropTypes from 'prop-types';

const Button_blackfont_transBG = ({ buttonText, IconClassRight, IconClassLeft }) => {
    const hasLeftIcon = !!IconClassLeft;
    const hasRightIcon = !!IconClassRight;

    return (
        <div>
            <button className="button-black">
                <div className={`button-wrapper-black ${hasLeftIcon ? 'has-left-icon' : ''} ${hasRightIcon ? 'has-right-icon' : ''}`}>
                    <div className="child-box-black"></div>
                    {hasLeftIcon && <i className={`bi ${IconClassLeft} button-icon_left`}></i>}
                    <span className='button-text'>{buttonText}</span>
                    {hasRightIcon && <i className={`bi ${IconClassRight} button-icon_right`}></i>}
                </div>
            </button>
        </div>
    );
}

Button_blackfont_transBG.propTypes = {
    buttonText: PropTypes.string.isRequired,
    IconClassRight: PropTypes.string,
    IconClassLeft: PropTypes.string,
}

export default Button_blackfont_transBG;
