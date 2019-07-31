import React from 'react';

import { shallow } from 'enzyme';
import LoginFormContainer from '../../../../components/containers/loginPage/LoginFormContainer';

function renderLoginForm(args) {
  const defaultProps = {
    username: '',
    password: '',
    onChangeHandler: jest.fn(),
    onSubmitHandler: jest.fn()
  };
  const props = { ...defaultProps, ...args };
  return shallow(<LoginFormContainer {...props} />);
}

describe('LoginFormContainer', () => {
  it('should match snapshot', () => {
    const wrapper = renderLoginForm();
    expect(wrapper).toMatchSnapshot();
  });
});
