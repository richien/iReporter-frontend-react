import React from 'react';
import { shallow } from 'enzyme';
import { NavBar } from '../../../../components/views/commons/NavBar';

function renderNavBar(args) {
  const defaultProps = {};
  const props = { ...defaultProps, ...args };
  return shallow(<NavBar {...props} />);
}

describe('NavBar', () => {
  it('should match snapshot', () => {
    const wrapper = renderNavBar();
    expect(wrapper).toMatchSnapshot();
  });
});
