import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';



const Mainpage = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [showOTPInput, setShowOTPInput] = useState(false);
  const [otp, setOTP] = useState('');

  const handleGetOTP = () => {
    setShowOTPInput(true);
  };

  const handleVerifyOTP = () => {
    if (otp === '821031') {
      Navigate('/dashboard');
    } 
    else {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className=' flex flex-col justify-center items-center h-screen border rounded-[5px] border-solid border-[#9c2d2d]'>
    <h1>Login</h1>
        <input
          type="tel"
          placeholder="Enter your mobile number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          className="  m-2.5 p-2.5"
        />
        <button
          onClick={handleGetOTP}
          className=" bg-[#007bff] text-white cursor-pointer m-2.5 px-5 py-2.5 border-[none] hover:bg-[#0056b3]"
          >
          Get OTP
        </button>

        {showOTPInput && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
              className="  m-2.5 p-2.5"
            />

            <button
              onClick={handleVerifyOTP}
              className=" bg-[#007bff] text-white cursor-pointer m-2.5 px-5 py-2.5 border-[none] hover:bg-[#0056b3]"
         
         >

          submit
            </button>
          </>
        )}
      </div>
  );
};

export default Mainpage;