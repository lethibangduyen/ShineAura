import React from'react';
import Logo from '../../Components/Assets/Media/logo_black.png';
import './Signup.css'
import SignInButton from '../../Components/Button/Button_sign_in';
import FacebookSignInButton from '../../Components/Button/Button_facebook_sign_in';
import GoogleSignInButton from '../../Components/Button/Button_google_sign_in';
const Signup = () => {
    return (
        <div className="signup">
            <div className="signup-container">
                <div className="signup-logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="main">
                    
                    <div className="signup-form">
                        <div className="signup-form-title">SIGN UP</div>
                        <form action="">
                            
                            <div className="signup-form-input">
                                <input type="text" placeholder="Email" />
                            </div>
                            <div className="signup-form-input">
                                <input type="password" placeholder="Password" />
                            </div>
                            <div className="signup-form-input">
                                <input type="password" placeholder="Confirm Password" />
                            </div>
                            <div className="commision">
                                <input type="checkbox" />
                                <p>“I accept the terms and conditions”.</p>
                            </div>
                            <div className="signup-form-button">
                                <SignInButton type="submit">Sign In</SignInButton>
                            </div>
                            <div className="signin-transfer">
                                <signup-sub-text>You have an account? <a href='#'>Sign in</a></signup-sub-text>
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
                            <div className="signup-form-footer">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quo ut incidunt facilis laboriosam delectus, veritatis provident sint iusto, mollitia obcaecati impedit eaque. Facilis voluptatibus at sed! Tempore, maxime inventore.</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Signup;