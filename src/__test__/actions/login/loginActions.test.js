import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import * as actions from '../../../actions/login/loginActions';
import { login, apiCallStatus } from '../../../actions/types';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('doLogin thunk', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should call the failed action creators when login fails', () => {
    const store = mockStore({});
    moxios.wait(() => {
      const mockrequest = moxios.requests.mostRecent();
      mockrequest.respondWith({
        status: 401,
        error: {}
      });
    });

    const expectedActions = [
      { type: apiCallStatus.API_CALL_START },
      { type: apiCallStatus.API_CALL_ERROR },
      { type: login.LOGIN_FAILURE }
    ];
    const user = {
      username: 'james',
      password: ''
    };
    return store.dispatch(actions.doLogin(user)).catch(() => {
      expect({ type: apiCallStatus.API_CALL_START }).toEqual(expectedActions[0]);
      expect({ type: apiCallStatus.API_CALL_ERROR }).toEqual(expectedActions[1]);
      expect({ type: login.LOGIN_FAILURE }).toEqual(expectedActions[2]);
    });
  });
});

describe('loginActions', () => {
  it("it should return 'LOGIN_SUCCESS' when called", () => {
    const result = actions.loginSuccess();
    expect(result).toEqual({
      type: login.LOGIN_SUCCESS
    });
  });
});
