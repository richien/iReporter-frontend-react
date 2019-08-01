import getredflags from '../../../reducers/incidents/redflagsReducer';
import * as actions from '../../../actions/incidents/redflagActions';

const initialState = {
  data: [],
  error: {}
};

const data = {
  data: {
    username: 'james',
    access_token: 'sadcasdcasdc.asdcasdasdcas.sadcdcsderbfhb'
  }
};
const error = {
  message: 'An error occured'
};

describe(' getredflags', () => {
  it('it tests the reducer is called', () => {
    const newstate = getredflags(initialState, data);
    expect(newstate).toEqual(initialState);
  });

  it('should return true when on data is retrieved ', () => {
    const newstate = getredflags(initialState, actions.getAllRedFlagsSuccess(data));
    expect(newstate.data).toEqual(data);
  });

  it('should return false when and error occurs', () => {
    const newstate = getredflags(initialState, actions.getAllRedFlagsFailure(error));
    expect(newstate.error).toEqual({ message: 'An error occured' });
  });
});
