import React from 'react';
import { Link } from 'react-router-dom';

const CardContent = ({ school, attendees }) => (
  <div className="content">
    <Link className="is-size-4" to={`/schools/${school.id}`}>
      {school.name}
    </Link>
    <figure className="image is-3by1">
      <img src={school.imageURL} alt="School image" />
    </figure>
    <p className="is-size-5">Student Count: {attendees}</p>
  </div>
);

export default CardContent;
