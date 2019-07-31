import { apiCallStatus } from '../../actions/types';

const initialState = {
  apiCallsInProgress: 0
};

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === '_SUCCESS';
}

export default function apiCallStatusReducer(state = initialState.apiCallsInProgress, action) {
  if (action.type === apiCallStatus.API_CALL_START) {
    return state + 1;
  }
  if (actionTypeEndsInSuccess(action.type)) {
    return state - 1;
  }
  if (action.type === apiCallStatus.API_CALL_ERROR) {
    return state - 1;
  }
  return state;
}
