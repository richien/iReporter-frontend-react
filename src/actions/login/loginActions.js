/* eslint-disable func-names */
import { login } from '../types';
import * as loginApi from './loginApi';
import * as apiCallStatus from '../apiActions/apiCallStatusActions';

export function loginSuccess(data) {
  return { type: login.LOGIN_SUCCESS, data };
}

export function loginFailure(error) {
  return { type: login.LOGIN_FAILURE, error };
}

export function doLogin(user) {
  return function(dispatch) {
    dispatch(apiCallStatus.apiCallStart());
    return loginApi
      .login(user)
      .then(data => {
        const loggedIn = true;
        sessionStorage.setItem('access_token', data[0].access_token);
        sessionStorage.setItem('user', JSON.stringify(data[0].user));
        sessionStorage.setItem('isLoggedIn', loggedIn);
        dispatch(loginSuccess(data));
      })
      .catch(error => {
        dispatch(apiCallStatus.apiCallError());
        dispatch(loginFailure(error));
        const errorMessage = 'Username or Password is Invalid. Please Try Again';
        throw errorMessage;
      });
  };
}
