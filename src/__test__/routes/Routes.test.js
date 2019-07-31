import React from 'react';
import { shallow } from 'enzyme';
import { Routes } from '../../routes/Routes';

describe('Routes', () => {
  it('should render Routes component', () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper).toMatchSnapshot();
  });
});
