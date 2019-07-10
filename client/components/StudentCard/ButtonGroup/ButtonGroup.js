import React from 'react';

const ButtonGroup = ({ destroyStudent }) => (
  <div className="buttons is-centered">
    <button type="button" className="button is-info">
      Edit
    </button>
    <button onClick={destroyStudent} type="button" className="button is-danger">
      Delete
    </button>
  </div>
);

export default ButtonGroup;
