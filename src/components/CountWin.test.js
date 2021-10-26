import { render, screen, fireEvent } from '@testing-library/react';
import CountWin from "./CountWin";
import App from "../App";

test('checking that the score is display', () => {
    render(<App />);
    const score = screen.getByTestId('score');
    expect(score).toBeInTheDocument();

});