import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('/api/login', { email, password })
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem('token', token);
        window.location.href = '/dashboard';
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" value={email} onChange={handleChange} required />
      <input type="password" name="password" value={password} onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
