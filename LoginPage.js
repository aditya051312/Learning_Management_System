import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  let history = useHistory();

  const handleSubmit = () => {
    history.push('/dashboard');
  };

  return (
    <div className="login-page">
      <div className="image-section">
        <img src="image.jpg" alt="Learning" />
      </div>
      <div className="form-section">
        <h1>Login</h1>
        <p>Enter your email and password to access your account</p>
        <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
          <Form>
            <Field type="email" name="email" placeholder="Email" required />
            <Field type="password" name="password" placeholder="Password" required />
            <button type="submit">Login</button>
            <button type="button">Forgot Password?</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default LoginPage;
