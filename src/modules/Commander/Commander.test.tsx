import React from 'react';
import { render, screen } from '@testing-library/react';
import Commander from './Commander';

test('renders learn react link', () => {
  render(<Commander />);
  const linkElement = screen.getByText(/Commander Commander/i);
  expect(linkElement).toBeInTheDocument();
});
