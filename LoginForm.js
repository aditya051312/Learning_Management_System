import React from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';

function LoginForm() {
  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      // Here you would usually make a request to your API for login
      // For simplicity, we're just redirecting to the dashboard
      history.push('/dashboard');
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <button type="submit">Login</button>
      <button type="button">Forgot password?</button>
    </form>
  );
}

export default LoginForm;
