/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

export const cards = redFlags => {
  const cardItems = redFlags.map((redFlag, key) =>
    redFlag.status !== 'draft' ? (
      <div key={`${redFlag.id + key}`} className="card" id="redflag">
        <div className="card-body">
          <h4 className="card-title" id="rf-title">
            <a>{redFlag.title}</a>
          </h4>
          <hr />
          <div className="container">
            <div className="row">
              <div className="col-lg-3 rf-header-lower">
                <small>Status {redFlag.status}</small>
              </div>
              <div className="col-lg-3" />
              <div className="col-lg-3" />
              <div className="col-lg-3 rf-header-lower">
                <small>{redFlag.createdOn.slice(0, -12)}</small>
              </div>
            </div>
          </div>
          <p className="card-text" id="rf-comment" key={redFlag.id}>
            {redFlag.comment}
          </p>
        </div>
      </div>
    ) : (
      ''
    )
  );
  return cardItems;
};

const Redflag = ({ redFlags, errors }) =>
  errors ? (
    <div id="errors">
      <h2>{redFlags}</h2>
    </div>
  ) : (
    cards(redFlags)
  );

Redflag.propTypes = {
  redFlags: PropTypes.shape().isRequired,
  errors: PropTypes.bool.isRequired
};

export default Redflag;
