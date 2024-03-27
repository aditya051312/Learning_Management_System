import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'test' && password === 'test') {
      history.push('/dashboard');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        Username:
        <input type='text' value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <input type='submit' value='Login' />
    </form>
  );
}

export default LoginPage;