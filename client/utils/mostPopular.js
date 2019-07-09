const studentsPerSchool = (students = []) =>
  students.reduce((count, student) => {
    const schoolId = student.schoolId;
    if (schoolId) {
      if (count[schoolId]) {
        count[schoolId]++;
      } else {
        count[schoolId] = 1;
      }
    }
    return count;
  }, {});

const sortSchoolsByStudents = (counts = {}) => {
  return Object.entries(counts).sort((a, b) => {
    const [_, count1] = a;
    const [_2, count2] = b;
    return count2 - count1;
  });
};

const findMostPopularSchool = (students = [], schools = []) => {
  const studentCounts = studentsPerSchool(students);
  const [[schoolId, count]] = sortSchoolsByStudents(studentCounts);
  const school = schools.find(_school => _school.id === schoolId);
  return [school, count];
};

export default findMostPopularSchool;
