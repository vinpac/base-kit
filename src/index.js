import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import Router from 'react-router/BrowserRouter'
import configureStore from './redux/configureStore'

import App from './App'

// Import generated css
import './dist/css/app.css'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router pathname="/">
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
