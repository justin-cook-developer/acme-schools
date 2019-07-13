import React from 'react';

import CardContent from './CardContent/CardContent';
import Select from './CardSelect/CardSelect';
import methods from '../../utils/index';

const { attendeesCount, notAttending } = methods;

const handleChange = ({ target }, schoolId, updateStudent) => {
  const { value } = target;
  if (!value) {
    return;
  }
  updateStudent(value, schoolId);
};

const SchoolCard = ({ school, students, updateStudent }) => {
  return (
    <div className="tile is-parent is-4">
      <div className="tile is-child box has-text-centered">
        <CardContent
          attendees={attendeesCount(school, students)}
          school={school}
        />
        <Select
          students={notAttending(school.id, students)}
          handleChange={e => handleChange(e, school.id, updateStudent)}
        />
      </div>
    </div>
  );
};

export default SchoolCard;
