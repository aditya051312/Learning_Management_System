import React, { useState } from 'react';
import { login } from './login';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await login(email, password);
    if (response.status === 200) {
      window.location.href = '/dashboard';
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
