import React, { useEffect, useRef, useState } from 'react';
import './Button_normalfont_brownBG.css';
import PropTypes from 'prop-types';

const Button_normalfont_brownBG = ({ buttonText, IconClassRight, IconClassLeft }) => {
    const hasLeftIcon = !!IconClassLeft;
    const hasRightIcon = !!IconClassRight;
    const buttonWrapperRef = useRef(null);
    const childBoxRef = useRef(null);
    const [childBoxWidth, setChildBoxWidth] = useState(0);

    useEffect(() => {
        if (buttonWrapperRef.current && childBoxRef.current) {
            // Thực hiện tính toán chiều rộng và cập nhật state
            const width = buttonWrapperRef.current.offsetWidth;
            setChildBoxWidth(width);
        }
    }, [hasLeftIcon, hasRightIcon]);

    return (
        <div>
            <button className="button-normalfont-brownBG">
                <div className="child-box-normalfont-brownBG" style={{ width: `${childBoxWidth}px` }} ref={childBoxRef}></div>
                <div className={`button-wrapper-normalfont-brownBG ${hasLeftIcon ? 'has-left-icon' : ''} ${hasRightIcon ? 'has-right-icon' : ''}`} ref={buttonWrapperRef}>
                    {hasLeftIcon && <i className={`bi ${IconClassLeft} button-icon_left`}></i>}
                    <span className='button-text'>{buttonText}</span>
                    {hasRightIcon && <i className={`bi ${IconClassRight} button-icon_right`}></i>}
                </div>
            </button>
        </div>
    );
}

Button_normalfont_brownBG.propTypes = {
    buttonText: PropTypes.string.isRequired,
    IconClassRight: PropTypes.string,
    IconClassLeft: PropTypes.string,
}

export default Button_normalfont_brownBG;
