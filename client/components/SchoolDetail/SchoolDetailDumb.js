import React from 'react';

import StudentCard from '../StudentCard/StudentCard';
import AddStudentToSchool from '../AddStudentToSchool/AddStudentToSchool';
import methods from '../../utils/index';

const { attendeesCount } = methods;

const wrapTiles = { flexWrap: 'wrap' };

const SchoolDetail = ({ school, students }) => {
  if (school === undefined) return null;
  return (
    <section className="section">
      <div className="container">
        <div className="content">
          <h2 className="title">
            {school.name} ({attendeesCount(school, students)} Students Enrolled)
          </h2>
        </div>
        <div className="content">
          <AddStudentToSchool school={school} />
        </div>
        <div className="tile is-ancestor" style={wrapTiles}>
          {students
            .filter(s => s.schoolId === school.id)
            .map(student => (
              <StudentCard student={student} key={student.id} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolDetail;
