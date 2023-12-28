import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo-black.png';
import Button from '../../components/common/button/button';
import './reset-password.scss';

const ResetPassword = () => {
  return (
    <div className="reset-password flex-col section-container">
      <div className="flex-row section gap-xl flex-wrap">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="reset-password-container max-wdth flex-col align-left gap-sm">
          <div className="title flex-col align-left gap-xs">
            <h3 className="h4">PASSWORD RESET</h3>
            <p className="body">Enter your new password for your Shine-Aura account</p>
          </div>
          <form className="flex-col max-wdth align-left gap-sm">
            <input className="body max-wdth auth-input" type="password" placeholder="New Password"/>
            <input className="body max-wdth auth-input" type="password" placeholder="Confirm New Password"/>
            <Button text="Change my password" btnStyle="auth-btn" customBtnStyle="max-wdth" frameStyle='max-wdth' type="submit"></Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
