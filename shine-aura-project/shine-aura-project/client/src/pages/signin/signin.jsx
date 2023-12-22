import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signin.css';
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
      axios.post('http://localhost:5173/signin', { email, password })
        .then((res) => {
          console.log(res);
          if (res.data === 'Success') {
            navigate('/homepage');
          }
  
        })
        .catch((err) => {
          console.log(err);
        });
  
    };
  
    return (
      <div className="signin-shine">
        <div className="section-signup-container">
          <div className="flex-row section gap-3xl">
            <div className="signup-logo">
              <img src={Logo} alt="logo" />
            </div>
            <div className="signin-form-container flex-col">
              <div className="title-form flex-col gap-xs">
                <h3 className="h3">SIGN IN</h3>
              </div>
              <form onSubmit={handleSignIn} className="flex-col signin-form">
                <div className="signup-form-input">
                  <input
                    className="body"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="signup-form-input">
                  <input
                    className="body"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="additional-function flex-row spc-vt-sm body-smxl">
                  <div className="remember-me">
                    <input type="checkbox" /> Remember me
                  </div>
                  <div className="forgot-pw">
                    <Link to="/forgotpass">Forgot passwords?</Link>
                  </div>
                </div>
                <Button type="submit" text="SIGN IN" btnStyle="auth-btn" frameStyle="signup-btn"></Button>
                <div className="signin-transfer flex-col">
                  <signup-sub-text>You have an account?
                    <Link to="/signup">Sign up</Link>
                  </signup-sub-text>
                  <hr className="spc-vt-2xs" />
                  <signup-sub-text>or</signup-sub-text>
                </div>
                <div className="flex-row ano-btn gap-sm">
                  <Button text="GOOGLE" btnStyle="auth-btn" icon='bi bi-google'></Button>
                  <Button text="FACEBOOK" btnStyle="auth-btn" icon='bi bi-facebook'></Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Signin;