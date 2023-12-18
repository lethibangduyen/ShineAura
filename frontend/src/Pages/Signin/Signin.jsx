import React from'react';
import Logo from '../../Components/Assets/Media/logo_black.png';
import './Signin.css'
import SignInButton from '../../Components/Button/Button_sign_in';
import FacebookSignInButton from '../../Components/Button/Button_facebook_sign_in';
import GoogleSignInButton from '../../Components/Button/Button_google_sign_in';
const Signin = () => {
    return (
        <div className="signin">
            <div className="signin-container">
                <div className="signin-logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="main">
                    <div className="signin-form-title">SIGN IN</div>
                    <div className="signin-form">
                        <form action="">
                            
                            <div className="signin-form-input">
                                <input type="text" placeholder="Email" />
                            </div>
                            <div className="signin-form-input">
                                <input type="password" placeholder="Password" />
                            </div>
                            <div className="additional-function">
                                <div className="remember-me">
                                    <input type="checkbox" /> Remember me
                                </div>
                                <div className="forgot-pw">
                                    <a  href="#">Forgot password?</a>
                                </div>
                            </div>
                            <div className="signin-form-button">
                                <SignInButton type="submit">Sign In</SignInButton>
                            </div>
                            <div className="signup-transfer">
                                <signup-sub-text>Do you have account? <a href='#'>Sign up</a></signup-sub-text>
                                <hr />
                                <signup-sub-text>or</signup-sub-text>
                            </div>
                            <div className="another-signin-button">
                                <div className="gg-buton">
                                    <GoogleSignInButton /> 
                                </div>
                                
                                <div className="facebook-buton">
                                    <FacebookSignInButton />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Signin;