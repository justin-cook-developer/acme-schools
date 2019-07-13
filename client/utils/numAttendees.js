const attendeesCount = (school, students) => {
  const attendees = students.filter(s => s.schoolId === school.id);
  return attendees.length;
};

export default attendeesCount;
