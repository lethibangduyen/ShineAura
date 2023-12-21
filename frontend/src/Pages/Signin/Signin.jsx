import React, { useState } from 'react';
import Logo from '../../Components/Assets/Media/logo_black.png';
import './Signin.css';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button/NewButton/button';
import '../../Components/Assets/css/global.css';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Thực hiện kiểm tra và xử lý đăng nhập ở đây, có thể sử dụng API hoặc các phương thức xử lý khác
    console.log('Email:', email, 'Password:', password);
    // Đặt logic xử lý đăng nhập ở đây, ví dụ fetch API, axios, etc.
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
