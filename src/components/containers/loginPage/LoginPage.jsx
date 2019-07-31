import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { doLogin } from '../../../actions/login/loginActions';
import LoginFormContainer from './LoginFormContainer';

export class LoginPage extends Component {
  state = {
    user: {
      username: '',
      password: ''
    }
  };

  onChangeHandler = event => {
    const { user } = this.state;
    const newUserState = {
      ...user,
      [event.target.name]: event.target.value
    };
    this.setState({ user: newUserState });
  };

  onSubmitHandler = event => {
    const { user } = this.state;
    const { loginAction, history } = this.props;
    event.preventDefault();
    loginAction(user)
      .then(() => {
        toast.dismiss();
        toast.success(`Successfully logged in as ${user.username}`, {
          autoClose: 3000
        });
        history.push('/incidents');
      })
      .catch(error => {
        toast.dismiss();
        toast.error(`${error}`, {
          autoClose: 3000
        });
      });
  };

  render() {
    const { username, password } = this.state;
    const { loading } = this.props;
    return (
      <div className="container">
        <div className="row login-wrapper">
          <div className="col-md-6 offset-md-3">
            <LoginFormContainer
              username={username}
              password={password}
              onChangeHandler={this.onChangeHandler}
              onSubmitHandler={this.onSubmitHandler}
              loading={loading}
            />
          </div>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  loginAction: PropTypes.func.isRequired,
  history: PropTypes.shape(),
  loading: PropTypes.bool
};

LoginPage.defaultProps = {
  history: {},
  loading: false
};

export function mapStateToProps(state) {
  return {
    loading: state.apiCallsInProgress > 0
  };
}

export default connect(
  mapStateToProps,
  { loginAction: doLogin }
)(LoginPage);
