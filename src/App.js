import React from 'react';
import { Provider } from 'react-redux';
import { Routes } from './routes/Routes';
import store from './store/index';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
