import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio sections', () => {
  render(<App />);
  const heroElement = screen.getByText(/Architecting Scalable Solutions/i);
  expect(heroElement).toBeInTheDocument();
});