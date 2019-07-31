/* eslint-disable func-names */
import { signUp } from '../types';
import * as signUpApi from './signUpApi';
import * as apiCallStatus from '../apiActions/apiCallStatusActions';

export function signUpSuccess(data) {
  return { type: signUp.SIGNUP_SUCCESS, data };
}

export function signUpFailure(error) {
  return { type: signUp.SIGNUP_FAILURE, error };
}

export function doSignUp(user) {
  return function(dispatch) {
    dispatch(apiCallStatus.apiCallStart());
    return signUpApi
      .signUp(user)
      .then(data => {
        dispatch(signUpSuccess(data));
        return data;
      })
      .catch(error => {
        dispatch(apiCallStatus.apiCallError());
        dispatch(signUpFailure(error));
        throw error;
      });
  };
}
