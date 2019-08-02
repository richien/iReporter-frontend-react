import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { doSignUp } from '../../../actions/signUp/signUpActions';
import SignUpFormContainer from './SignUpFormContainer';
import UnAuthenticated from '../../../routes/UnAuthenticated';

export class SignUpPage extends Component {
  state = {
    user: {
      username: '',
      email: '',
      password1: '',
      password2: '',
      firstname: 'anonynous',
      lastname: 'anonynous'
    }
  };

  isInvalidPassword = () => {
    const {
      user: { password1, password2 }
    } = this.state;
    let isInvalid = true;
    if (password1 === password2) {
      isInvalid = false;
    }
    return isInvalid;
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
    event.preventDefault();
    const { user } = this.state;
    if (this.isInvalidPassword()) {
      toast.dismiss();
      toast.error("Passwords don't match. Please Try Again.", {
        autoClose: 3000
      });
      return;
    }
    const { signUpAction, history } = this.props;
    signUpAction(user)
      .then(data => {
        toast.dismiss();
        toast.success(` ${data[0].message}. You can now Login to you account`, {
          autoClose: 5000
        });
        history.push('/login');
      })
      .catch(error => {
        toast.dismiss();
        toast.error(`${error}`, {
          autoClose: 3000
        });
      });
  };

  render() {
    const { username, password1, password2 } = this.state;
    const { loading } = this.props;
    return (
      <div className="container">
        <div className="row login-wrapper">
          <div className="col-md-6 offset-md-3">
            <SignUpFormContainer
              username={username}
              password1={password1}
              password2={password2}
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

SignUpPage.propTypes = {
  signUpAction: PropTypes.func.isRequired,
  history: PropTypes.shape(),
  loading: PropTypes.bool
};

SignUpPage.defaultProps = {
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
  { signUpAction: doSignUp }
)(UnAuthenticated(SignUpPage));
