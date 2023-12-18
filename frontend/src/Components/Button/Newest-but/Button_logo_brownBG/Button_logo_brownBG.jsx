import React, { useEffect, useRef, useState } from 'react';
import './Button_logo_brownBG.css';
import PropTypes from 'prop-types';

const Button_logo_brownBG = ({ IconClass }) => {
    return (
        <div>
            <button className="button-logo-brownBG">
                <div className="child-box-logo-brownBG"></div>
                <i className={`bi ${IconClass} button-icon`} style={{ width: '20px', height: '20px' }}></i>
            </button>
        </div>
    );
}

Button_logo_brownBG.propTypes = {
    IconClass: PropTypes.string,
}

export default Button_logo_brownBG;
