import signUpReducer from '../../../reducers/signUp/signUpReducer';
import * as actions from '../../../actions/signUp/signUpActions';

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

describe(' signUpReducer', () => {
  it('it tests the reducer is called', () => {
    const newstate = signUpReducer(initialState, data);
    expect(newstate).toEqual(initialState);
  });

  it('should return data on successful registration', () => {
    const newstate = signUpReducer(initialState, actions.signUpSuccess(data));
    expect(newstate.data).toEqual(data);
  });

  it('should return an error when registration fails', () => {
    const newstate = signUpReducer(initialState, actions.signUpFailure(error));
    expect(newstate.error).toEqual({ message: 'An error occured' });
  });
});
