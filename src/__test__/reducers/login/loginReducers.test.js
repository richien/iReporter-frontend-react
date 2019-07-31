import loginReducer from '../../../reducers/login/loginReducer';
import * as actions from '../../../actions/login/loginActions';

const initialState = {
  data: {},
  error: {}
};

const data = {
  user: {
    username: 'james',
    access_token: 'sadcasdcasdc.asdcasdasdcas.sadcdcsderbfhb'
  }
};
const error = {
  message: 'An error occured'
};

describe(' loginReducer', () => {
  it('it tests the reducer is called', () => {
    const newstate = loginReducer(initialState, data);
    expect(newstate).toEqual(initialState);
  });

  it('should return true when on successful lodgin', () => {
    const newstate = loginReducer(initialState, actions.loginSuccess(data));
    expect(newstate.data).toEqual(data);
  });

  it('should return false when login fails', () => {
    const newstate = loginReducer(initialState, actions.loginFailure(error));
    expect(newstate.error).toEqual({ message: 'An error occured' });
  });
});
