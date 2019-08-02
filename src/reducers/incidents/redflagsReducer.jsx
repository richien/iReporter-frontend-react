import { incidents } from '../../actions/types';

const initialState = {
  data: [],
  error: {}
};

export default function getredflags(state = initialState, action) {
  switch (action.type) {
    case incidents.GET_ALL_REDFLAGS_SUCCESS:
      return {
        ...state,
        data: action.data
      };
    case incidents.GET_ALL_REDFLAGS_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
