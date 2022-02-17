import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginScreen from '../components/auth/LoginScreen';
import RegisterScreen from '../components/auth/RegisterScreen';

import image from '../assets/undraw_specs_re_546x.svg';

const AuthRouter = () => {
  return (
    <div className="auth__main container">
      <div>
        <div className="auth__box-container">
          <Routes>
            <Route path="/login" element={<LoginScreen />}></Route>
            <Route path="/register" element={<RegisterScreen />}></Route>
            <Route path="*" element={<Navigate to="/auth/login" />}></Route>
          </Routes>
        </div>
      </div>
      <div className="auth__box-image">
        <img src={image} alt="imagen de una mujer escribiendo en un pizarron" className='auth__img'/>
      </div>
    </div>
  /* https://dribbble.com/shots/13993146-Ghost-Sign-In/attachments/5607448?mode=media */
  )
};

export default AuthRouter;
