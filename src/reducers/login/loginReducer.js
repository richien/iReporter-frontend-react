import { login } from '../../actions/types';

const initialState = {
  data: [],
  error: {},
  isLoggedIn: false
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case login.LOGIN_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLoggedIn: true
      };
    case login.LOGIN_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoggedIn: false
      };
    default:
      return state;
  }
}
