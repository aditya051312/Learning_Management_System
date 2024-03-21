import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from '../Login';

describe('Login', () => {
  test('renders Login component', () => {
    render(<Router><Login /></Router>);
  });

  test('has a title and subtitle', () => {
    const { getByText } = render(<Router><Login /></Router>);
    expect(getByText('Login')).toBeInTheDocument();
    expect(getByText('Enter your email and password to access your account')).toBeInTheDocument();
  });

  test('has email and password fields', () => {
    const { getByLabelText } = render(<Router><Login /></Router>);
    expect(getByLabelText(/email/i)).toBeInTheDocument();
    expect(getByLabelText(/password/i)).toBeInTheDocument();
  });

  test('has login and forgot password buttons', () => {
    const { getByText } = render(<Router><Login /></Router>);
    expect(getByText(/login/i)).toBeInTheDocument();
    expect(getByText(/forgot password/i)).toBeInTheDocument();
  });

  test('redirects to dashboard on login', () => {
    const { getByText } = render(<Router><Login /></Router>);
    const loginButton = getByText(/login/i);
    fireEvent.click(loginButton);
    expect(window.location.pathname).toBe('/dashboard');
  });
});