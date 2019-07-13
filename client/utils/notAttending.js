const notAttending = (schoolId, students) => {
  return students.filter(s => s.schoolId !== schoolId);
};

export default notAttending;
