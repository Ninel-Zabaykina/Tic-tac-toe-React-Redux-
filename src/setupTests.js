// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
// функция для создания поддельного стора
export const mockStore = configureStore();
const TestProvider = ({
                          store,
                          children
                      }) => <Provider store={store}>{children}</Provider>
export function testRender(ui, { store, ...otherOpts }) {
    return render(<TestProvider store={store}>{ui}</TestProvider>, otherOpts)
}