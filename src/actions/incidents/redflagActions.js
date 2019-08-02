/* eslint-disable func-names */
import { incidents } from '../types';
import * as incidentsApi from './incidentsApi';
import * as apiCallStatus from '../apiActions/apiCallStatusActions';

export function getAllRedFlagsSuccess(data) {
  return { type: incidents.GET_ALL_REDFLAGS_SUCCESS, data };
}

export function getAllRedFlagsFailure(error) {
  return { type: incidents.GET_ALL_REDFLAGS_FAILURE, error };
}

export function getAllRedFlags() {
  return function(dispatch) {
    dispatch(apiCallStatus.apiCallStart());
    return incidentsApi
      .getRedFlags()
      .then(data => {
        dispatch(getAllRedFlagsSuccess(data));
        return data;
      })
      .catch(error => {
        dispatch(apiCallStatus.apiCallError());
        dispatch(getAllRedFlagsFailure(error));
        throw error;
      });
  };
}
