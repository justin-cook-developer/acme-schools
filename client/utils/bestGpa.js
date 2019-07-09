const truncateTwoPlaces = num => {
  const fixed = num.toFixed(2);
  return Number(fixed);
};

const findAvgGpa = (schoolId, students) => {
  const _students = students.filter(s => s.schoolId === schoolId);
  const totalGPAs = _students.reduce((total, s) => total + s.GPA, 0);
  const avg = totalGPAs / _students.length;
  return truncateTwoPlaces(avg);
};

const calculateGpas = (students = [], schools = []) => {
  return schools.reduce((record, school) => {
    record[school.name] = [school, findAvgGpa(school.id, students)];
    return record;
  }, {});
};

const findHighestGpa = (gpas = {}) => {
  const vals = Object.values(gpas);
  vals.sort((a, b) => {
    const [_, avg1] = a;
    const [_2, avg2] = b;
    return avg2 - avg1;
  });
  return vals[0];
};

const findSchoolWithHighestGPA = (students = [], schools = []) => {
  const gpas = calculateGpas(students, schools);
  console.log('-----', gpas);
  return findHighestGpa(gpas);
};

export default findSchoolWithHighestGPA;
