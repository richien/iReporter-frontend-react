import React from 'react';
import { shallow } from 'enzyme';
import {
  SignUpPage,
  mapStateToProps
} from '../../../../components/containers/signUpPage/SignUpPage';

describe('SignUpPage', () => {
  const defaultProps = {
    signUpAction: () =>
      new Promise(resolve => {
        resolve({ data: {} });
      }),
    history: { push: jest.fn() }
  };

  const wrapper = shallow(<SignUpPage {...defaultProps} />);

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should map the state in the store to local props', () => {
    const state = {
      loading: false
    };
    expect(mapStateToProps(state)).toEqual({
      loading: false
    });
  });

  it('should handle onChange event', () => {
    wrapper.setState({
      target: {
        name: 'username',
        value: 'peter'
      }
    });
    const wrapperInstance = wrapper.instance();
    const event = {
      target: {
        name: 'username',
        value: 'peter'
      }
    };
    jest.spyOn(wrapperInstance, 'onChangeHandler');
    wrapperInstance.onChangeHandler(event);

    expect(wrapperInstance.onChangeHandler).toBeCalled();
  });

  it('returns true when passwords dont match', () => {
    wrapper.setState({
      user: {
        password1: 'Enter123',
        password2: 'ggggTT'
      }
    });
    const wrapperInstance = wrapper.instance();
    const isInValid = wrapperInstance.isInvalidPassword();

    expect(isInValid).toEqual(true);
  });

  it('returns false when passwords match', () => {
    wrapper.setState({
      user: {
        password1: 'Enter123',
        password2: 'Enter123'
      }
    });
    const wrapperInstance = wrapper.instance();
    const isInValid = wrapperInstance.isInvalidPassword();

    expect(isInValid).toEqual(false);
  });
  it('should handle submit successfully', () => {
    wrapper.setState({
      user: {
        username: 'james',
        password1: 'efdfvsfv',
        password2: 'efdfvsfv',
        email: 'james@email.com'
      }
    });
    const wrapperInstance = wrapper.instance();
    const event = { preventDefault: jest.fn() };
    jest.spyOn(wrapperInstance, 'onSubmitHandler');
    wrapperInstance.onSubmitHandler(event);
    expect(wrapperInstance.onSubmitHandler).toBeCalled();
  });
  it('should fail at password validation after the onSubmitHandler is called', () => {
    wrapper.setState({
      user: {
        username: 'james',
        password1: 'efdfvsfv',
        password2: 'efdf',
        email: 'james@email.com'
      }
    });
    const wrapperInstance = wrapper.instance();
    const event = { preventDefault: jest.fn() };
    jest.spyOn(wrapperInstance, 'onSubmitHandler');
    wrapperInstance.onSubmitHandler(event);
    expect(wrapperInstance.onSubmitHandler).toBeCalled();
  });
});
