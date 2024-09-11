import React from 'react';
import { render, screen } from '@testing-library/react';
import Greeting from '../components/Greeting';

test('renders greeting with name', () => {
  render(<Greeting name="Spongebob" />);
  const greetingElement = screen.getByText(/Hello, Spongebob!/i);
  expect(greetingElement).toBeInTheDocument();
});

