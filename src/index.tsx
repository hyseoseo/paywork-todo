import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/react';
import App from './App';
import { Provider } from 'react-redux';
import store from 'store/configureStore';
import { GlobalStyles } from 'styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Global styles={GlobalStyles} />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
