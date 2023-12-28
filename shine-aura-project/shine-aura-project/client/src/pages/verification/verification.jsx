import React, { useRef } from 'react';
import Logo from '../../assets/img/logo-black.png';
import './verification.scss';
import Button from '../../components/common/button/button';

const Verification = () => {
  const handleVeri = (e) => {
    e.preventDefault();
    // Thêm logic xử lý xác nhận OTP ở đây
  };

  const handleInputChange = (index, value) => {
    const nextIndex = index + 1;
    const prevIndex = index - 1;

    if (value.length === 1 && nextIndex < inputsRef.current.length) {
      inputsRef.current[nextIndex].focus();
    }
    if (value.length === 0 && index > 0) {
      inputsRef.current[index].focus();
      inputsRef.current[index].value = '';
    }
  };

  const handleKeyDown = (index, e) => {
    // Xử lý sự kiện khi nhấn phím Backspace
    if (e.key === 'Backspace') {
      const prevIndex = index - 1;
      if (index > 0) {
        inputsRef.current[prevIndex].focus();
        inputsRef.current[prevIndex+1].value = '';
      }
    }
  };

  const inputsRef = useRef([]);

  return (
    <div className="section-container flex-row verification-page">
      <div className="flex-row section gap-xl flex-wrap">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="verify-form-container max-wdth flex-col align-left gap-sm">
          <div className="title flex-col align-left gap-xs">
            <h4 className='h4 uppercase'>OTP VERIFICATION</h4>
            <p className='body'>We have sent OTP on your email</p>
          </div>
          <form onSubmit={handleVeri} className="flex-col max-wdth align-left gap-sm">
            <div className="num-verify flex-row gap-sm">
              {[0, 1, 2, 3].map((index) => (
                <input
                  key={index}
                  type="text"
                  className='auth-input'
                  placeholder=""
                  ref={(el) => (inputsRef.current[index] = el)}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  maxLength={1} 
                />
              ))}
            </div>
            <p className='body'>Didn’t receive an OTP? <a href='#'>Resend OTP</a></p>
            <Button text="Verify" btnStyle="auth-btn" customBtnStyle="max-wdth" frameStyle='max-wdth' type="submit"></Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Verification;
