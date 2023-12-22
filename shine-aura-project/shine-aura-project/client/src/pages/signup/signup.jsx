import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css'
import Logo from '../../assets/img/logo-black.png';
import Button from '../../components/common/button/button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    console.log({ email, password, confirmPassword });
    axios.post('http://localhost:3000/signup', { email, password, confirmPassword })
    .then((res) => {
      console.log(res);
      navigate('/signin');
    })
    .catch((err) => {
      console.log(err);
    });
  

  };
  
  return (
    <div className="signup-shine flex-col">
      <div className="flex-row section gap-3xl">
        <div className="signup-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="signup-form-container flex-col">
          <div className="title-form flex-col gap-xs">
            <h3 className="h3">SIGN UP</h3>
          </div>
          <form onSubmit={handleSignup} className="flex-col forgot-form">
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
            <div className="signup-form-input">
              <input
                className="body"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="flex-row commision gap-2xs spc-vt-sm body-lgt">
              <input className="body" type="checkbox" />
              <p>“I accept the terms and conditions”.</p>
            </div>
            <Button
              text="SIGN UP"
              btnStyle="auth-btn"
              frameStyle="signup-btn"
              type="submit"
            ></Button>
            <div className="signin-transfer flex-col">
              <signup-sub-text>
                You have an account? <Link to="/signin">Sign in</Link>
              </signup-sub-text>
              <hr className="spc-vt-2xs" />
              <signup-sub-text>or</signup-sub-text>
            </div>
            <div className="flex-row ano-btn gap-sm">
              <Button
                text="GOOGLE"
                btnStyle="auth-btn"
                icon="bi bi-google"
              ></Button>
              <Button
                text="FACEBOOK"
                btnStyle="auth-btn"
                icon="bi bi-facebook"
              ></Button>
            </div>
            <div className="signup-form-footer body-sml spc-vt-sm">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita quo ut incidunt facilis laboriosam delectus, veritatis
                provident sint iusto, mollitia obcaecati impedit eaque. Facilis
                voluptatibus at sed! Tempore, maxime inventore.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
