import * as apiUtils from '../../../actions/apiActions/apiUtils';

describe('test apiUtils', () => {
  it("should return 'handleResponse' and a data object", () => {
    const data = {
      message: 'new message'
    };
    const result = apiUtils.handleResponse(data);
    expect(result).toEqual(data);
  });

  it('should throw an error object', () => {
    const expected = {
      error: {}
    };
    let actual = {};
    try {
      apiUtils.handleError(expected);
    } catch (error) {
      actual = error;
      expect(expected).toEqual(actual);
    }
  });
});
