import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signin.scss';
import Logo from '../../assets/img/logo-black.png';
import Button from '../../components/common/button/button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
  
  const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleSignIn = (e) => {
      e.preventDefault();
      console.log({ email, password });
      axios.post('http://localhost:3000/signin', { email, password })
        .then((res) => {
          console.log(res);
          if (res.data === 'Success') {
            navigate('/');
          }
        })
        .catch((err) => {
          console.log(err);
        });
  
    };
  
    return (
      <div className="section-container flex-col signin-page">
        <div className='flex-row section gap-xl flex-wrap'>
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="signin-form-container max-wdth flex-col align-left gap-sm">
            <div className="title flex-col align-left gap-xs uppercase">
              <h3 className="h3">signin</h3>
            </div>
            <form onSubmit={handleSignIn} className="flex-col max-wdth align-left gap-sm">
              <input className="body auth-input max-wdth" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input className="body auth-input max-wdth" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <div className="additional-function flex-row body-sml flex-center-align max-wdth">
                <div className="remember-user flex-row gap-xs body">
                  <input type="checkbox"/>
                  <p>Remember me</p>
                </div>
                <div className="forgot-pw body">
                  <Link to="/forgot-password">Forgot passwords?</Link>
                </div>
              </div>
              <Button type="submit" text="SIGN IN" btnStyle="auth-btn" frameStyle='max-wdth' customBtnStyle='max-wdth'></Button>
              <div className="signup-opts flex-col max-wdth body">
                <signup-sub-text>You have an account?
                  <Link to="/signup"> Sign up</Link>
                </signup-sub-text>
                <hr className="margin-hr-5-per" />
                <signup-sub-text>or</signup-sub-text>
              </div>
              <div className="flex-row gap-sm max-wdth">
                <Button text="GOOGLE" btnStyle="auth-btn" icon='bi bi-google' frameStyle='max-wdth' customBtnStyle='max-wdth'></Button>
                <Button text="FACEBOOK" btnStyle="auth-btn" icon='bi bi-facebook' frameStyle='max-wdth' customBtnStyle='max-wdth'></Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default Signin;