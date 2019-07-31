import apiCallStatusReducer from '../../../reducers/api/apiCallStatusReducer';

describe('test apiStatus reducer', () => {
  it('it tests the reducer increments state by 1 at start of call', () => {
    const action = { type: 'API_CALL_START' };
    const state = 0;

    const newstate = apiCallStatusReducer(state, action);

    expect(newstate).toEqual(1);
  });

  it('it tests the reducer decrements state by 1 on a successfull call', () => {
    const action = { type: 'MOCK_ACTION_SUCCESS' };
    const state = 1;

    const newstate = apiCallStatusReducer(state, action);

    expect(newstate).toEqual(0);
  });

  it('it tests the reducer decrements state by 1 on an errored call', () => {
    const action = { type: 'API_CALL_ERROR' };
    const state = 1;

    const newstate = apiCallStatusReducer(state, action);

    expect(newstate).toEqual(0);
  });
});
