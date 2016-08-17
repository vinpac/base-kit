import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './redux/configureStore'
import App from './components/App'
import { Provider } from 'react-redux'
import './dist/css/app.css'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
