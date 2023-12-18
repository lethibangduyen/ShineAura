import React from "react";
import "./button.css";

const Button = ({ text="", onClick = () => {}, type, btnStyle, disabled, icon="", textStyle="", frameStyle="" }) => {
    if (btnStyle === "nav-btn") {
        if (textStyle !== "") {
            textStyle = textStyle;
        } else {
            textStyle = "pre-title";
        }
        frameStyle = "nav-btn-frame " + frameStyle;
    } else if (btnStyle === "underline-btn") {
        if (textStyle !== "") {
            textStyle = textStyle;
        } else {
            textStyle = "body-lgt";
        } 
        frameStyle = "underline-btn-frame " + frameStyle;
    } else if (btnStyle === "auth-btn") {
        if (textStyle !== "") {
            textStyle = textStyle;
        } else {
            textStyle = "btn-text";
        } 
        frameStyle = "auth-frame " + frameStyle;
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
            <p className={textStyle}>{text}</p>
        </div>
        </button>
    );
}

export default Button;