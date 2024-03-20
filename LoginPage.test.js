import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginPage from '../src/components/LoginPage';

test('renders login form', () => {
  const { getByLabelText, getByText } = render(<LoginPage />);

  const emailInput = getByLabelText(/email/i);
  const passwordInput = getByLabelText(/password/i);
  const loginButton = getByText(/login/i);

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password' } });
  fireEvent.click(loginButton);

  expect(emailInput.value).toBe('test@example.com');
  expect(passwordInput.value).toBe('password');
});