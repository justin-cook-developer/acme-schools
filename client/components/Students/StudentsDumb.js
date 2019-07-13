import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import StudentCard from '../StudentCard/StudentCard';
import EditModal from '../EditModal/EditModal';

const wrapTiles = {
  flexWrap: 'wrap',
};

const Students = ({ students }) => {
  return (
    <Fragment>
      <Route path="/students/edit/:id" exact component={EditModal} />
      <section className="section">
        <div className="container">
          <div className="tile is-ancestor" style={wrapTiles}>
            {students.map(student => (
              <StudentCard student={student} key={student.id} />
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Students;
