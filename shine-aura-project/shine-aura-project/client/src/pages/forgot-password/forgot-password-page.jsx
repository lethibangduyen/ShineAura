import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo-black.png';
import './forgot-password-page.css'
import Button from '../../components/common/button/button';

const ForgotPassword = () => {
    return (
        <div className="section-container">
            <div className="flex-row section gap-3xl">
                <div className="signin-logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="forgot-form-container flex-col gap-md">
                    <div className="flex-col gap-xs align-left">
                        <h4 className='h4'>FORGOT PASSWORD</h4>
                        <p className='body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel tellus lectus.</p>
                    </div>
                    <form action="" className='flex-col forgot-form gap-sm'>
                        <input type="text" className='email-input body' placeholder="Email" />

                        <Button text="SIGN IN" btnStyle="auth-btn" frameStyle='fl-wth'></Button>

                        <div className="flex-center-align flex-row gap-md">
                            <Link to="/signup" className='sign-up'>Sign up</Link>
                            <Link to="/signin" className='sign-in'>Sign in</Link>
                        </div>


                        <div className="forgot-footer body-sml">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum nobis voluptatibus molestiae sequi ipsam, laudantium obcaecati tenetur hic dolores, dolorum eum asperiores nihil. Recusandae, beatae iste? Architecto numquam nesciunt dicta.</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default ForgotPassword;