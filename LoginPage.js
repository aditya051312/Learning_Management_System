import React from 'react';
import LoginForm from './LoginForm';
import './styles.css';

function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-image"></div>
      <div className="login-form-container">
        <h1>Login</h1>
        <h2>Enter your email and password to access your account</h2>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
