import React from 'react';
import { Formik, Form, Field } from 'formik';

const LoginForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={onSubmit}
    >
      <Form>
        <Field type="email" name="email" placeholder="Email" required />
        <Field type="password" name="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
