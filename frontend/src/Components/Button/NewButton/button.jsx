import React from "react";
import "./button.css";
import '../../Assets/css/global.css'

const Button = ({ text="", onClick = () => {}, type, btnStyle, disabled, icon="", textStyle="", frameStyle="" }) => {
    if (btnStyle === "nav-btn") {
        textStyle = "pre-title" + textStyle;
        frameStyle = "nav-btn-frame" + frameStyle;
    } else if (btnStyle === "underline-btn") {
        textStyle = "body-lgt" + textStyle;
        frameStyle = "underline-btn-frame" + frameStyle;
    }

    let iconState = "";
    if (icon !== "") {
        iconState = <i className={icon}></i>;
    }

    const handleClick = onClick !== "" ? onClick : undefined;

    return (
        <button
        className={btnStyle}
        onClick={handleClick}
        type={type}
        disabled={disabled}
        >
        <div className={frameStyle}>
            {iconState}
            <span className={textStyle}>{text}</span>
        </div>
        </button>
    );
}

export default Button;