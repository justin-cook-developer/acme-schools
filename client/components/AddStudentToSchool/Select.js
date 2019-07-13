import React from 'react';

const Select = ({ changeStudentsSchool, notAttending }) => (
  <select
    onChange={e => {
      const value = e.target.value;
      if (!value) return;
      changeStudentsSchool(value);
    }}
  >
    <option value="">-- Add a student --</option>
    {notAttending.map(student => (
      <option key={student.id} value={student.id}>
        {student.firstName} {student.lastName}
      </option>
    ))}
  </select>
);

export default Select;
