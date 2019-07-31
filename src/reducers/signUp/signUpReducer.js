import { signUp } from '../../actions/types';

const initialState = {
  data: {},
  error: {}
};

export default function signUpReducer(state = initialState, action) {
  switch (action.type) {
    case signUp.SIGNUP_SUCCESS:
      return {
        ...state,
        data: action.data
      };
    case signUp.SIGNUP_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
