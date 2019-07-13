import React from 'react';

import StudentCard from '../StudentCard/StudentCard';

const wrapTiles = {
  flexWrap: 'wrap',
};

const Students = ({ students }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="tile is-ancestor" style={wrapTiles}>
          {students.map(student => (
            <StudentCard student={student} key={student.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Students;
