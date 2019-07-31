import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage, mapStateToProps } from '../../../../components/containers/loginPage/LoginPage';

describe('LoginPage', () => {
  const defaultProps = {
    loginAction: () =>
      new Promise(resolve => {
        resolve('Successfully logged in');
      }),
    history: {}
  };

  const wrapper = shallow(<LoginPage {...defaultProps} />);

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
        name: 'password',
        value: '1234Enter'
      }
    });
    const wrapperInstance = wrapper.instance();
    const event = {
      target: {
        name: 'password',
        value: '1234Enter'
      }
    };
    jest.spyOn(wrapperInstance, 'onChangeHandler');
    wrapperInstance.onChangeHandler(event);

    expect(wrapperInstance.onChangeHandler).toBeCalled();
  });

  it('should handle submit successfully', () => {
    wrapper.setState({
      user: {
        username: 'james',
        password: 'efdfvsfv'
      }
    });
    const wrapperInstance = wrapper.instance();
    const event = { preventDefault: jest.fn() };
    jest.spyOn(wrapperInstance, 'onSubmitHandler');
    wrapperInstance.onSubmitHandler(event);

    expect(wrapperInstance.onSubmitHandler).toBeCalled();
  });
});
