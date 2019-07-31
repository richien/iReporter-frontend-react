import { combineReducers } from 'redux';
import apiCallsInProgress from './api/apiCallStatusReducer';
import loginReducer from './login/loginReducer';

export default combineReducers({
  apiCallsInProgress,
  loginReducer
});
