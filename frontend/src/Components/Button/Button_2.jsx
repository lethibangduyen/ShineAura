import React from 'react';
import './Buttons.css';

const Button_2 = ({ buttonText }) => {
    return (
      <div>
        <button className="button_2">
          <div className="child-box_2"></div>
          <span>{buttonText}</span>
        </button>
      </div>
    );
  }
  
  export default Button_2;
  