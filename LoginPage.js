import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useHistory } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  let history = useHistory();

  const handleSubmit = (values) => {
    // Here you would normally send the values to the server for authentication
    // For simplicity, we will just redirect to the dashboard
    history.push('/dashboard');
  };

  return (
    <div className="login-page">
      <div className="image-section">
        {/* Here you can include your captivating image */}
      </div>
      <div className="form-section">
        <h1>Login</h1>
        <p>Enter your email and password to access your account</p>
        <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
          <Form>
            <Field type="email" name="email" placeholder="Email" />
            <Field type="password" name="password" placeholder="Password" />
            <button type="submit">Login</button>
          </Form>
        </Formik>
        <button>Forgot password?</button>
      </div>
    </div>
  );
}

export default LoginPage;
