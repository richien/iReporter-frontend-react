import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from '../../../../components/views/commons/Footer';

function renderFooter(args) {
  const defaultProps = {};
  const props = { ...defaultProps, ...args };
  return shallow(<Footer {...props} />);
}

describe('Footer', () => {
  it('should match snapshot', () => {
    const wrapper = renderFooter();
    expect(wrapper).toMatchSnapshot();
  });
});
