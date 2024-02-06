import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Login from './Login';
import axios from 'axios';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Dashboard';

jest.mock('axios');

test('renders login form', () => {
  const { getByPlaceholderText } = render(<Login />);
  const emailInput = getByPlaceholderText('Email');
  const passwordInput = getByPlaceholderText('Password');
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

test('submits form with email and password', async () => {
  axios.post.mockResolvedValue({ status: 200 });
  const { getByPlaceholderText, getByText } = render(
    <Router>
      <Route path="/dashboard" component={Dashboard} />
      <Login />
    </Router>
  );
  const emailInput = getByPlaceholderText('Email');
  const passwordInput = getByPlaceholderText('Password');
  const button = getByText('Login');
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password' } });
  fireEvent.click(button);
  await waitFor(() => expect(axios.post).toHaveBeenCalledWith('/api/login', { email: 'test@example.com', password: 'password' }));
  expect(emailInput.value).toBe('');
  expect(passwordInput.value).toBe('');
});

test('displays error on failed login', async () => {
  axios.post.mockRejectedValue(new Error('Login failed'));
  const { getByPlaceholderText, getByText } = render(<Login />);
  const emailInput = getByPlaceholderText('Email');
  const passwordInput = getByPlaceholderText('Password');
  const button = getByText('Login');
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password' } });
  fireEvent.click(button);
  await waitFor(() => expect(axios.post).toHaveBeenCalledWith('/api/login', { email: 'test@example.com', password: 'password' }));
  expect(getByText('Login failed. Please check your credentials.')).toBeInTheDocument();
});
