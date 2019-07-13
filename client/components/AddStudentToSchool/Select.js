import React from 'react';

const Select = ({ changeStudentsSchool, notAttending }) => (
  <form onSubmit={e => e.preventDefault()}>
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
  </form>
);

export default Select;
