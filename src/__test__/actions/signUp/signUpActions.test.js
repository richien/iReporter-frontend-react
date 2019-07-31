import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import * as actions from '../../../actions/signUp/signUpActions';
import { signUp, apiCallStatus } from '../../../actions/types';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('doSignUp thunk', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should call the failed action creator when registration fails', () => {
    const store = mockStore({});
    moxios.wait(() => {
      const mockrequest = moxios.requests.mostRecent();
      mockrequest.respondWith({
        status: 400,
        response: { error: {} }
      });
    });

    const expectedActions = [
      { type: apiCallStatus.API_CALL_START },
      { type: apiCallStatus.API_CALL_ERROR },
      { type: signUp.SIGNUP_FAILURE, error: {} }
    ];
    const user = {
      username: 'james',
      password: '123Enter'
    };
    return store.dispatch(actions.doSignUp(user)).catch(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should call the success action creator when registration is successful', () => {
    const store = mockStore({});
    moxios.wait(() => {
      const mockrequest = moxios.requests.mostRecent();
      mockrequest.respondWith({
        status: 200,
        response: { data: {} }
      });
    });

    const expectedActions = [
      { type: apiCallStatus.API_CALL_START },
      { type: signUp.SIGNUP_SUCCESS, data: {} }
    ];
    const user = {
      username: 'james',
      password: '123Enter',
      email: 'james@email.com'
    };
    return store.dispatch(actions.doSignUp(user)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('SignUpActions', () => {
  it("it should return 'SIGNUP_SUCCESS' when called", () => {
    const result = actions.signUpSuccess();
    expect(result).toEqual({
      type: signUp.SIGNUP_SUCCESS
    });
  });
});
