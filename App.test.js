import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { MemoryRouter as Router } from 'react-router-dom';

test('renders login page by default', () => {
  const { getByText } = render(
    <Router initialEntries={['/']}>
      <App />
    </Router>
  );
  expect(getByText('Login')).toBeInTheDocument();
});
