import React from 'react';
import { Redirect } from 'react-router-dom';

const UnAuthenticated = Component => props =>
  !sessionStorage.getItem('isLoggedIn') ? <Component {...props} /> : <Redirect to="/incidents" />;

export default UnAuthenticated;
