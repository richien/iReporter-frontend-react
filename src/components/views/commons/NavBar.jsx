import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class NavBar extends Component {
  state = {
    isLoggedIn: false
  };

  componentWillMount() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      this.setState({
        isLoggedIn: true
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loginReducer.isLoggedIn) {
      this.setState({
        isLoggedIn: true
      });
    }
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <React.Fragment>
        <div className="navbar">
          <a className="navbar-brand" href="/">
            iReporter
          </a>
          <ul className="nav justify-content-end grey lighten-4 py-4">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="incidents">
                    Redflags
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="logout">
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="login">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="signup">
                    Register
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

NavBar.propTypes = {
  loginReducer: PropTypes.shape()
};

NavBar.defaultProps = {
  loginReducer: {}
};

export const mapStateToProps = state => ({
  loginReducer: state.loginReducer
});

export default connect(
  mapStateToProps,
  null
)(NavBar);
