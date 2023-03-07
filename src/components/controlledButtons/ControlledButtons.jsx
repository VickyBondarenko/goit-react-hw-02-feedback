import React from 'react';

export const ControlledButtons = ({ onAddGood, onAddNeutral, onAddBad }) => {
  return (
    <div className="d-flex align-items-center justify-content-center w-100">
      <h2>Please leave feedback</h2>
      <button
        onClick={onAddGood}
        className="btn p-3 btn-outline-light w-25 mx-2"
        type="button"
      >
        Good
      </button>

      <button
        onClick={onAddNeutral}
        className="btn p-3 btn-outline-light w-25 mx-2"
        type="button"
      >
        Neutral
      </button>
      <button
        onClick={onAddBad}
        className="btn p-3 btn-outline-light w-25 mx-2"
        type="button"
      >
        Bad
      </button>
    </div>
  );
};
