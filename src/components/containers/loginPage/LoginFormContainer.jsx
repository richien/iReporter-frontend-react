import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Input from '../../views/commons/Input';

const LoginFormContainer = ({ email, password, onChangeHandler }) => (
  <div className="card">
    <h2 className="card-header info-color white-text text-center py-4">
      <strong>iReporter</strong>
    </h2>

    <div className="card-body px-lg-5 pt-0">
      <form id="text-center">
        <Input
          type="email"
          id="materialLoginFormEmail"
          name="email"
          inputClassName="form-control"
          divClassName="md-form"
          label="materialLoginFormEmail"
          text="E-mail"
          value={email}
          onChangeHandler={onChangeHandler}
        />

        <Input
          type="password"
          name="password"
          id="materialLoginFormPassword"
          inputClassName="form-control"
          divClassName="md-form"
          label="materialLoginFormPassword"
          text="Password"
          value={password}
          onChangeHandler={onChangeHandler}
        />
        <button
          className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
          type="submit"
        >
          Login
        </button>
        <p>
          Not a member?
          <Link to="/signup"> Register</Link>
        </p>
      </form>
    </div>
  </div>
);

LoginFormContainer.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired
};

export default LoginFormContainer;
