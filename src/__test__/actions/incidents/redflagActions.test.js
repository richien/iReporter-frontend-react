import * as actions from '../../../actions/incidents/redflagActions';
import { incidents } from '../../../actions/types';

describe('loginActions', () => {
  it("it should return 'GET_ALL_REDFLAGS_SUCCESS' when called", () => {
    const result = actions.getAllRedFlagsSuccess();
    expect(result).toEqual({
      type: incidents.GET_ALL_REDFLAGS_SUCCESS
    });
  });
  it("it should return 'GET_ALL_REDFLAGS_FAILURE' when called", () => {
    const result = actions.getAllRedFlagsFailure();
    expect(result).toEqual({
      type: incidents.GET_ALL_REDFLAGS_FAILURE
    });
  });
});
