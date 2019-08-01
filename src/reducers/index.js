import { combineReducers } from 'redux';
import apiCallsInProgress from './api/apiCallStatusReducer';
import loginReducer from './login/loginReducer';
import signUpReducer from './signUp/signUpReducer';
import redflagsReducer from './incidents/redflagsReducer';

export default combineReducers({
  apiCallsInProgress,
  loginReducer,
  signUpReducer,
  redflagsReducer
});
