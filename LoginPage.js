import React from 'react';
import LoginForm from './LoginForm';

const LoginPage = () => {
  const handleSubmit = (values) => {
    // Here you would normally send the values to your server for authentication
    // If authentication is successful, you would redirect the user to the dashboard page
    console.log(values);
  };

  return (
    <div className="login-page">
      <div className="image-section">
        {/* Here you can add your image */}
      </div>
      <div className="form-section">
        <h1>Login</h1>
        <p>Enter your email and password to access your account</p>
        <LoginForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default LoginPage;
