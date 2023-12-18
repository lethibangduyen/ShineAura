import React from'react';
import Logo from '../../Components/Assets/Media/logo_black.png';
import './ForgotPassword.css'
import SignInButton from '../../Components/Button/Button_sign_in';
const ForgotPassword = () => {
    return (

        <div className="signin">
            <div className="signin-container">
                <div className="signin-logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="main">
                    <div className="forgot-form">
                        <form action="">
                            <div className="forgot-form-title">FORGOT PASSWORD</div>
                            <div className="sub-title">
                                Please enter your email address and we will send you a link to reset your password.
                            </div>
                            <div className="forgot-form-input">
                                <input type="text" placeholder="Email" />
                            </div>
                            <div className="signup-button">
                                <SignInButton type="submit">Sign Up</SignInButton>
                            </div>
                            <div className="additional-function">
                                <div className="back-signin">
                                   <a href="">Sign in</a>
                                </div>
                                <div className="next-signup">
                                    <a  href="#">Sign up</a>
                                </div>
                            </div>
    
                            <div className="footer">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum nobis voluptatibus molestiae sequi ipsam, laudantium obcaecati tenetur hic dolores, dolorum eum asperiores nihil. Recusandae, beatae iste? Architecto numquam nesciunt dicta.</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ForgotPassword;