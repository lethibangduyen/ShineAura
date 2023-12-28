import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo-black.png';
import './forgot-password-page.scss'
import Button from '../../components/common/button/button';

const ForgotPassword = () => {
    const handleForgot = (e) => {};
    
    return (
        <div className="section-container flex-row forgot-password-page">
            <div className="flex-row section gap-xl flex-wrap">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="forgot-form-container max-wdth flex-col align-left gap-sm">
                <div className="title flex-col align-left gap-xs">
                    <h4 className='h3 uppercase'>FORGOT PASSWORD</h4>
                    <p className='body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel tellus lectus.</p>
                </div>
                <form onSubmit={handleForgot} className="flex-col max-wdth align-left gap-sm">
                    <input type="text" className='auth-input body max-wdth' placeholder="Email" />
                    <div className="flex-center-align flex-row gap-md auth-opts max-wdth">
                         <Button text="Try another way" btnStyle="auth-btn" customBtnStyle="max-wdth" frameStyle='max-wdth' type="submit" textStyle='btn-text-lgt'></Button>
                         <Button text="Next" btnStyle="auth-btn" customBtnStyle="max-wdth" frameStyle='max-wdth' textStyle='btn-text-lgt' type="submit"></Button>

                    </div>
                   
                    <div className="flex-center-align flex-row gap-md auth-opts max-wdth">
                        <Link to="/signup" className='sign-up body'>Sign up</Link>
                        <Link to="/signin" className='sign-in body'>Sign in</Link>
                    </div>
                    <div className="body-sml">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum nobis voluptatibus molestiae sequi ipsam, laudantium obcaecati tenetur hic dolores, dolorum eum asperiores nihil. Recusandae, beatae iste? Architecto numquam nesciunt dicta.</p>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
}
export default ForgotPassword;
