import React from 'react';

export default function Spinner() {
  return (
    <div id="loading">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
