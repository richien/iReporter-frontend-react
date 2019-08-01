import React from 'react';
import { shallow } from 'enzyme';
import Input from '../../../../components/views/commons/Input';

function renderInput(args) {
  const defaultProps = {
    label: '',
    text: '',
    divClassName: 'form-control',
    inputClassName: 'field',
    type: '',
    id: '',
    name: '',
    value: '',
    onChangeHandler: jest.fn(),
    required: false
  };
  const props = { ...defaultProps, ...args };
  return shallow(<Input {...props} />);
}

describe('Input', () => {
  it('should match snapshot', () => {
    const wrapper = renderInput();
    expect(wrapper).toMatchSnapshot();
  });
});
