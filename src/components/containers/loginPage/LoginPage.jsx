import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginFormContainer from './LoginFormContainer';

export class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="container">
        <div className="row row-wrapper">
          <div className="col-md-6 offset-md-3">
            <LoginFormContainer
              email={email}
              password={password}
              onChangeHandler={this.onChangeHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {};

export default connect(mapStateToProps)(LoginPage);
