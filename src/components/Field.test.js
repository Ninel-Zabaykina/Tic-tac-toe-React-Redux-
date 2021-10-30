import { render, screen, fireEvent } from '@testing-library/react';
import Field from "./Field";
import {mockStore, testRender} from "../setupTests";
import {ACTION_TYPES, initialState} from "../store";

test('отображает игровое поле', () => {

    const store = mockStore({...initialState, squares: ["X", null]});
    testRender(<Field />, {store});
    const Square0 = screen.getByTestId('Sq'+ 0);
    expect(Square0).toHaveTextContent('X');


});
test('checking that the first click puts a cross and second click puts a null', () => {

    const store = mockStore(initialState);
    testRender(<Field />, {store});
    const Square0 = screen.getByTestId('Sq'+ 0);
    expect(Square0).toBeInTheDocument();
    const Square1 = screen.getByTestId('Sq'+ 1);
    expect(Square1).toBeInTheDocument();

    fireEvent.click(Square0);
    expect(store.getActions()).toEqual([{type: ACTION_TYPES.TURN, payload: 0 }]);
});
