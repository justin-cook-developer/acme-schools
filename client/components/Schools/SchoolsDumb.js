import React from 'react';

const Schools = ({ schools }) => {
  return (
    <section className="section">
      <div className="container">
        <ul>
          {schools.map(school => (
            <li key={school.id}>{school.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Schools;
