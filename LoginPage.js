import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import './index.css';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Too Short!').required('Required'),
});

function LoginPage() {
  let history = useHistory();

  return (
    <div className="container">
      <div className="image-section"></div>
      <div className="login-section">
        <div className="login-title">Login</div>
        <div className="login-subtitle">Enter your email and password to access your account</div>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={() => {
            history.push('/dashboard');
          }}
        >
          {({ errors, touched }) => (
            <Form className="login-form">
              <Field name="email" type="email" placeholder="Email" className={`form-control ${errors.email && touched.email && 'is-invalid'}`} />
              {errors.email && touched.email && <div className="invalid-feedback">{errors.email}</div>}
              <Field name="password" type="password" placeholder="Password" className={`form-control ${errors.password && touched.password && 'is-invalid'}`} />
              {errors.password && touched.password && <div className="invalid-feedback">{errors.password}</div>}
              <button type="submit" className="btn btn-primary btn-block">Login</button>
            </Form>
          )}
        </Formik>
        <div className="forgot-password">
          <a href="/">Forgot password?</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
