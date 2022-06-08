import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './containers/Login'
import SignUp from './containers/SignUp'
import ResetPassword from './containers/ResetPassword'
import ResetPasswordConfirm from './containers/ResetPasswordConfirm'
import Activate from './containers/Activate'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
 
  <Routes>
    <Route exact path="/" element={<App />} />
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/signup" element={<SignUp />} />
    <Route path="/reset-password" element={<ResetPassword />} />
    <Route path="/password-reset-confirm/:uid/token" element={<ResetPasswordConfirm />} />
    <Route path="/activate/:uid/token" element={<Activate />} />
  </Routes>
  </BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
