import React from 'react';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Routes } from './routes/Routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <ToastContainer />
    <Routes />
  </Provider>
);

export default App;
