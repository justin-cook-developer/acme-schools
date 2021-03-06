import React from 'react';

import ButtonGroup from './ButtonGroup/ButtonGroup';
import CardContent from './CardContent/CardContent';

const StudentCard = ({ student, studentSchool, destroyStudent }) => {
  return (
    <div className="tile is-parent is-4">
      <div className="tile is-child box has-text-centered">
        <CardContent student={student} studentSchool={studentSchool} />
        <ButtonGroup
          student={student}
          destroyStudent={() => destroyStudent(student.id)}
        />
      </div>
    </div>
  );
};

export default StudentCard;
