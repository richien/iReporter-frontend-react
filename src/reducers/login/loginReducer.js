import { login } from '../../actions/types';

const initialState = {
  data: {}
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case login.LOGIN_SUCCESS:
      return {
        ...state,
        data: action.data
      };
    case login.LOGIN_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
