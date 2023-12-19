import React from'react';
import Logo from '../../Components/Assets/Media/logo_black.png';
import './Signin.css'
import Button from '../../Components/Button/NewButton/button';
import '../../Components/Assets/css/global.css'
// import SignInButton from '../../Components/Button/Button_sign_in';
// import FacebookSignInButton from '../../Components/Button/Button_facebook_sign_in';
// import GoogleSignInButton from '../../Components/Button/Button_google_sign_in';

const Signin = () => {
    return (
        <div className="section-signup-container">
            <div className="flex-row section gap-3xl">
                <div className="signup-logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="signin-form-container flex-col">
                    <div className="title-form flex-col gap-xs">
                        <h3 className="h3" >SIGN IN</h3>
                    </div>                           
                            <form action="" className='flex-col signin-form'>
                                <div className="signup-form-input ">
                                    <input className='body' type="text" placeholder="Email" />
                                </div>
                                <div className="signup-form-input">
                                    <input className='body' type="password" placeholder="Password" />
                                </div>
                                <div className="additional-function flex-row spc-vt-sm body-smxl">
                                    <div className="remember-me">
                                        <input type="checkbox" /> Remember me
                                    </div>
                                    <div className="forgot-pw">
                                        <a  href="#">Forgot password?</a>
                                    </div>
                                </div>
                                <Button text="SIGN UP" btnStyle="auth-btn" frameStyle='signup-btn'></Button>
                                <div className="signin-transfer flex-col">
                                    <signup-sub-text>You have an account? <a href='#'>Sign up</a></signup-sub-text>
                                    <hr className="spc-vt-2xs" />
                                    <signup-sub-text>or</signup-sub-text>
                                </div>
                                <div className="flex-row ano-btn gap-sm">
                                    <Button text="GOOGLE" btnStyle="auth-btn" icon='bi bi-google'></Button >
                                    <Button text="FACEBOOK" btnStyle="auth-btn" icon='bi bi-facebook'></Button>
                                </div>
                            </form>
                </div>
            </div>
        </div>
    );
}
export default Signin;