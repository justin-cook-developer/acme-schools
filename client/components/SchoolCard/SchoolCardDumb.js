import React from 'react';

import CardContent from './CardContent/CardContent';
import AddStudentToSchool from '../AddStudentToSchool/AddStudentToSchool';
import methods from '../../utils/index';

const { attendeesCount } = methods;

const SchoolCard = ({ school, students }) => {
  return (
    <div className="tile is-parent is-4">
      <div className="tile is-child box has-text-centered">
        <CardContent
          attendees={attendeesCount(school, students)}
          school={school}
        />
        <AddStudentToSchool school={school} />
      </div>
    </div>
  );
};

export default SchoolCard;
