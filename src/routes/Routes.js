/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import LoginPage from '../components/containers/loginPage/LoginPage';
import SignUpPage from '../components/containers/signUpPage/SignUpPage';
import Landing from '../components/views/landingPage/Landing';
import Logout from './Logout';
import Incident from '../components/containers/incidentsPage/IncidentPage';

export const Routes = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/logout" component={Logout} />
        <Route path="/incidents" component={Incident} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
