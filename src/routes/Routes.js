/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import LoginPage from '../components/containers/loginPage/LoginPage';
import SignUpPage from '../components/containers/signUpPage/SignUpPage';
import Landing from '../components/views/landingPage/Landing';

export const Routes = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
