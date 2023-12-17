import React from 'react';
import './Buttons.css';  // Import the common styling

const GoogleSignInButton = () => {
    return (
        <button className="google-sign-in-button">
            <i className="bi bi-google"></i>Google
        </button>
    );
}

export default GoogleSignInButton;