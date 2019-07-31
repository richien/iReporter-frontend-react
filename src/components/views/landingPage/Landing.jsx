/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';

const divStyle = {
  background: 'cornflowerblue'
};

export const Landing = () => (
  <div className="card card-image" style={divStyle}>
    <div className="text-white text-center rgba-stylish-strong py-5 px-4">
      <div className="py-5">
        <h5 className="h5 lavender-text">
          <i className="fas fa-camera-retro" /> iReporter
        </h5>
        <h2 className="card-title h2 my-4 py-2 landing">Get Your Voice Heard Today</h2>
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 pb-2">
            <p className="card-text landing">
              {' '}
              Raise a red flag! Don&apos;t keep it to yourself. Actively report incidents of
              corruption to the authorities.
            </p>
          </div>
          <div className="col-md-6 pb-2">
            <p className="card-text landing">
              {' '}
              Intervene! Get that road fixed. Notify government agencies of infrastructure that
              needs repair.
            </p>
          </div>
        </div>
        <Link className="btn peach-gradient" to="/login">
          <i className="fas fa-clone left" /> Report
        </Link>
      </div>
    </div>
  </div>
);
export default Landing;
