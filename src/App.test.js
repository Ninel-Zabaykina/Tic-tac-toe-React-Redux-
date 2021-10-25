import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('checking that the first click puts a cross and second click puts a null', () => {
  render(<App />);
  const Square0 = screen.getByTestId('Sq0');
  expect(Square0).toBeInTheDocument();
  const Square1 = screen.getByTestId('Sq1');
  expect(Square1).toBeInTheDocument();

  fireEvent.click(Square0);
  expect(Square0).toHaveTextContent('X');
  fireEvent.click(Square1);
  expect(Square1).toHaveTextContent('O');
});
