import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Home link', () => {
  render(<App />);
  const menuElement = screen.getByText(/Home/i);
  expect(menuElement).toBeInTheDocument();
});
