import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from 'configureStore';

import './index.css';

import App from './App';

const initialState = {
  data: [],
  loading: false,
  error: '',
};

const store = configureStore(initialState);

//sagaMiddleware.run();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
