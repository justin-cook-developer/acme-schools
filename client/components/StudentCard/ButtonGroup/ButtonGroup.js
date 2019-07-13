import React from 'react';
import { Link } from 'react-router-dom';

const ButtonGroup = ({ destroyStudent, student }) => (
  <div className="buttons is-centered">
    <Link to={`/students/edit/${student.id}`} className="button is-info">
      Edit
    </Link>
    <button onClick={destroyStudent} type="button" className="button is-danger">
      Delete
    </button>
  </div>
);

export default ButtonGroup;
