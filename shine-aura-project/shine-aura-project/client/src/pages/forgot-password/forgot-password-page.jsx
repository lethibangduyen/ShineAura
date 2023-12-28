import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo-black.png';
import './forgot-password-page.scss';
import Button from '../../components/common/button/button';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [notification, setNotification] = useState('');

  const handleForgot = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/forgot-password', { email });
      setNotification(response.data.message);
    } catch (error) {
      console.error('Error:', error);
      setNotification('Error sending reset email');
    }
  };

  return (
    <div className="section-container flex-row forgot-password-page">
      <div className="flex-row section gap-xl flex-wrap">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="forgot-form-container max-wdth flex-col align-left gap-sm">
          <div className="title flex-col align-left gap-xs">
            <h4 className="h3 uppercase">FORGOT PASSWORD</h4>
            <p className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel tellus lectus.</p>
          </div>
          <form className="flex-col max-wdth align-left gap-sm">
            <input
              type="text"
              className="auth-input body max-wdth"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex-center-align flex-row gap-md auth-opts max-wdth">
              <Button
                text="Try another way"
                btnStyle="auth-btn"
                customBtnStyle="max-wdth"
                frameStyle="max-wdth"
                type="submit"
                textStyle="btn-text-lgt"
              ></Button>
              <Button
                text="Next"
                btnStyle="auth-btn"
                customBtnStyle="max-wdth"
                frameStyle="max-wdth"
                textStyle="btn-text-lgt"
                type="submit"
                onClick={handleForgot}
              ></Button>
            </div>
            <div className="flex-center-align flex-row gap-md auth-opts max-wdth">
              <Link to="/signup" className="sign-up body">
                Sign up
              </Link>
              <Link to="/signin" className="sign-in body">
                Sign in
              </Link>
            </div>
            <div className="body-sml">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum nobis voluptatibus molestiae sequi ipsam,
                laudantium obcaecati tenetur hic dolores, dolorum eum asperiores nihil. Recusandae, beatae iste?
                Architecto numquam nesciunt dicta.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
