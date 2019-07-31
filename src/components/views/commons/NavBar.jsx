import React from 'react';

export const NavBar = () => (
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
    </ul>
  </div>
);

export default NavBar;
