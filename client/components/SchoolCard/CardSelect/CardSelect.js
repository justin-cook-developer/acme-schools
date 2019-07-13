import React from 'react';

const Select = ({ handleChange, students }) => (
  <select onChange={handleChange}>
    <option value="">-- Add a student --</option>
    {students.map(student => (
      <option key={student.id} value={student.id}>
        {student.firstName} {student.lastName}
      </option>
    ))}
  </select>
);

export default Select;
