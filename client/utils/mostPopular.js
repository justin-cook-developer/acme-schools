import { createSelector } from 'reselect';

const studentsSelector = state => state.students;
const schoolsSelector = state => state.schools;

const studentsPerSchool = (students = []) =>
  students.reduce((counts, student) => {
    const schoolId = student.schoolId;
    if (schoolId) {
      if (counts[schoolId]) {
        counts[schoolId]++;
      } else {
        counts[schoolId] = 1;
      }
    }
    return counts;
  }, {});

const studentsPerSchoolSelector = createSelector(
  studentsSelector,
  studentsPerSchool
);

const sortSchoolsByStudents = (counts = {}) => {
  return Object.entries(counts).sort((a, b) => {
    const [_, count1] = a;
    const [_2, count2] = b;
    return count2 - count1;
  });
};

const sortSchoolsByStudentsSelector = createSelector(
  studentsPerSchoolSelector,
  sortSchoolsByStudents
);

const findMostPopularSchoolSelector = createSelector(
  schoolsSelector,
  sortSchoolsByStudentsSelector,
  (schools, [[schoolId, count]]) => {
    const school = schools.find(_school => _school.id === schoolId);
    return [school, count];
  }
);

export default findMostPopularSchoolSelector;
