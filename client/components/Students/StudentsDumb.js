import React from 'react';

const Students = ({ students }) => {
  return (
    <section className="section">
      <div className="container">
        {students.map(stud => (
          <div key={stud.id}>{stud.firstName}</div>
        ))}
      </div>
    </section>
  );
};

export default Students;
