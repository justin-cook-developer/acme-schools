import React from 'react';

import SchoolCard from '../SchoolCard/SchoolCard';

const wrapTiles = {
  flexWrap: 'wrap',
};

const Schools = ({ schools }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="tile is-ancestor" style={wrapTiles}>
          {schools.map(school => (
            <SchoolCard key={school.id} school={school} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schools;
