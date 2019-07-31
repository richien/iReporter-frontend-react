/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import LoginPage from '../components/containers/loginPage/LoginPage';

export const Routes = () => (
  <BrowserRouter>
    <div>
      <Switch>
        {/* <Route exact path="/" component={LoginPage} /> */}
        <Route path="/login" component={LoginPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
