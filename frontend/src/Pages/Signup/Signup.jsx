import React from'react';
import { Link } from 'react-router-dom';
import Logo from '../../Components/Assets/Media/logo_black.png';
import './Signup.css'
import Button from '../../Components/Button/NewButton/button';
import '../../Components/Assets/css/global.css'

const Signup = () => {
    return (
        <div className="signup-shine flex-col">
            <div className="flex-row section gap-3xl">
                <div className="signup-logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="signup-form-container flex-col">
                    <div className="title-form flex-col gap-xs">
                        <h3 className="h3" >SIGN UP</h3>
                    </div>
                    <form action="" className='flex-col forgot-form'>
                            <div className="signup-form-input ">
                                <input className='body' type="text" placeholder="Email" />
                            </div>
                            <div className="signup-form-input">
                                <input className='body' type="password" placeholder="Password" />
                            </div>
                            <div className="signup-form-input">
                                <input className='body' type="password" placeholder="Confirm Password" />
                            </div>
                            <div className="flex-row commision gap-2xs spc-vt-sm  body-lgt ">
                                <input className='body' type="checkbox" />
                                <p>“I accept the terms and conditions”.</p>
                            </div>
                            <Button text="SIGN UP" btnStyle="auth-btn" frameStyle='signup-btn'></Button>
                            <div className="signin-transfer flex-col">
                                <signup-sub-text>You have an account? 
                                <Link to="/signin">Sign in</Link>
                                    </signup-sub-text>
                                <hr className="spc-vt-2xs" />
                                <signup-sub-text>or</signup-sub-text>
                            </div>
                            <div className="flex-row ano-btn gap-sm">
                                <Button text="GOOGLE" btnStyle="auth-btn" icon='bi bi-google'></Button >
                                <Button text="FACEBOOK" btnStyle="auth-btn" icon='bi bi-facebook'></Button>
                            </div>
                            <div className="signup-form-footer body-sml spc-vt-sm">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quo ut incidunt facilis laboriosam delectus, veritatis provident sint iusto, mollitia obcaecati impedit eaque. Facilis voluptatibus at sed! Tempore, maxime inventore.</p>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Signup;
