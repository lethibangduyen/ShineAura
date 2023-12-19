import React from "react";
import "./button.css";
import CollectionDropdown from "../../Dropdown/CollectionDropdown/CollectionDropdown";

const Button = ({ text="", onClick = () => {}, type, btnStyle, disabled, icon="", textStyle="", frameStyle="", dropDown=""}) => {
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
    } else if (btnStyle === "footer-btn") {
        if (textStyle !== "") {
            textStyle = textStyle;
        } else {
            textStyle = "body-lgt";
        } 
        frameStyle = "footer-btn-frame " + frameStyle;
    } else if (btnStyle === "dropdown-btn") {
        if (textStyle !== "") {
            textStyle = textStyle;
        } else {
            textStyle = "pre-title";
        } 
        frameStyle = "dropdown-btn-frame " + frameStyle;
    }

    let dropdownSct = (
        <div className="dropdown-sct">
        </div>
    );

    if (dropDown === "") {
        dropdownSct = (
            <div className="dropdown-sct">
            </div>
        );
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
        <div className="dropdown-sct">
            <CollectionDropdown/>
        </div>
        </button>
    );
}

export default Button;