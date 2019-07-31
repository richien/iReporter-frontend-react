import { combineReducers } from 'redux';
import apiCallsInProgress from './api/apiCallStatusReducer';
import loginReducer from './login/loginReducer';
import signUpReducer from './signUp/signUpReducer';

export default combineReducers({
  apiCallsInProgress,
  loginReducer,
  signUpReducer
});
