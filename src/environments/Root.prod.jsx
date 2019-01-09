import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, initialState } from '../store';

import App from './App';

const Root = () => (
  <Provider store={configureStore(initialState)}>
    <App />
  </Provider>
);

export default Root;
