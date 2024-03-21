import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = () => {
  const history = useHistory();

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <img src="image.jpg" alt="Learning" style={{ height: '100vh', width: '100%' }} />
        </div>
        <div className="col-md-6">
          <h2>Login</h2>
          <p>Enter your email and password to access your account</p>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                console.log('Logging in', values);
                history.push('/dashboard');
                setSubmitting(false);
              }, 500);
            }}
          >
            <Form>
              <Field type="email" name="email" placeholder="Email" />
              <Field type="password" name="password" placeholder="Password" />
              <button type="submit">Login</button>
            </Form>
          </Formik>
          <button onClick={() => alert('Forgot password functionality not implemented yet.')}>Forgot Password?</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
