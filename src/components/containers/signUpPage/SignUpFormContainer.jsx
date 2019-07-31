import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import Input from '../../views/commons/Input';

const SignUpFormContainer = ({
  username,
  password1,
  password2,
  email,
  onChangeHandler,
  onSubmitHandler,
  loading
}) => (
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
          required
        />
        <Input
          type="email"
          id="materialLoginFormEmail"
          name="email"
          inputClassName="form-control"
          divClassName="md-form"
          label="materialLoginFormEmail"
          text="Email"
          value={email}
          onChangeHandler={onChangeHandler}
          required
        />
        <Input
          type="password"
          name="password1"
          id="materialLoginFormPassword"
          inputClassName="form-control"
          divClassName="md-form"
          label="materialLoginFormPassword"
          text="Password"
          value={password1}
          onChangeHandler={onChangeHandler}
          required
        />
        <Input
          type="password"
          name="password2"
          id="materialLoginFormPassword"
          inputClassName="form-control"
          divClassName="md-form"
          label="materialLoginFormPassword"
          text="confirm Password"
          value={password2}
          onChangeHandler={onChangeHandler}
          required
        />
        <button
          className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <Loader type="Puff" color="cornflowerblue" height="20" width="20" />
          ) : (
            'Register'
          )}
        </button>
        <p>
          Already have an account?
          {''}
          <Link to="/login"> Login </Link>
        </p>
      </form>
    </div>
  </div>
);

SignUpFormContainer.propTypes = {
  username: PropTypes.string.isRequired,
  password1: PropTypes.string.isRequired,
  password2: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  onSubmitHandler: PropTypes.func.isRequired,
  loading: PropTypes.bool
};

SignUpFormContainer.defaultProps = {
  loading: false
};

export default SignUpFormContainer;
