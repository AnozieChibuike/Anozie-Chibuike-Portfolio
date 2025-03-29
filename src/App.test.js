import { render, screen } from '@testing-library/react';
import App from './App';

test('go to skills', () => {
  render(<App />);
  const linkElement = screen.getAllByTitle(/skills/i);
  expect(linkElement).toBeInTheDocument();
});
