import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import Input from '../../views/commons/Input';

const LoginFormContainer = ({ username, password, onChangeHandler, onSubmitHandler, loading }) => (
  <div className="card">
    <h2 className="card-header info-color white-text text-center py-4">
      <strong>iReporter</strong>
    </h2>

    <div className="card-body px-lg-5 pt-0">
      <form id="text-center" onSubmit={onSubmitHandler}>
        <Input
          type="text"
          id="materialLoginFormEmail"
          name="username"
          inputClassName="form-control"
          divClassName="md-form"
          label="materialLoginFormEmail"
          text="Username"
          value={username}
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
          disabled={loading}
        >
          {loading ? <Loader type="Puff" color="#00bfff" height="20" width="20" /> : 'Login'}
        </button>
        <p>
          Not a member?
          {''}
          <Link to="/signup"> Register</Link>
        </p>
      </form>
    </div>
  </div>
);

LoginFormContainer.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  onSubmitHandler: PropTypes.func.isRequired,
  loading: PropTypes.bool
};

LoginFormContainer.defaultProps = {
  loading: false
};

export default LoginFormContainer;
