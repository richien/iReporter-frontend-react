/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  label,
  text,
  divClassName,
  inputClassName,
  type,
  id,
  name,
  value,
  onChangeHandler,
  required
}) => (
  <div className={divClassName}>
    <input
      type={type}
      className={inputClassName}
      id={id}
      name={name}
      value={value}
      onChange={onChangeHandler}
      required={required}
    />
    <label htmlFor={label}>{text}</label>
  </div>
);

Input.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string,
  divClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func,
  required: PropTypes.bool,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

Input.defaultProps = {
  label: '',
  text: '',
  divClassName: 'form-group',
  inputClassName: 'form-control',
  id: '',
  onChangeHandler: () => {},
  required: false
};

export default Input;
