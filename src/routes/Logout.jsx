import { Component } from 'react';

export class Logout extends Component {
  render() {
    sessionStorage.clear();
    return window.location.replace('/');
  }
}

export default Logout;
