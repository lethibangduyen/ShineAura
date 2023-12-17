import React from 'react';
import './Buttons.css';  // Import the common styling

const FacebookSignInButton = () => {
    return (
        <button className="facebook-sign-in-button">
            <i className="bi bi-facebook"></i>Facebook
        </button>
    );
}

export default FacebookSignInButton;