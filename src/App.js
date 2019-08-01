/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Routes } from './routes/Routes';
import store from './store';
import { Footer } from './components/views/commons/Footer';
import NavBar from './components/views/commons/NavBar';

const App = () => (
  <Provider store={store}>
    <NavBar />
    <ToastContainer />
    <Routes />
    <Footer />
  </Provider>
);

export default App;
