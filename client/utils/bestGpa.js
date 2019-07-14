const truncateTwoPlaces = num => {
  const fixed = num.toFixed(2);
  return Number(fixed);
};

const findAvgGpa = students => {
  if (students === true) return 0;
  const totalGPAs = students.reduce((total, s) => total + s.GPA, 0);
  const avg = totalGPAs / students.length;
  return truncateTwoPlaces(avg);
};

const makeRecords = (students, schools) => {
  const schoolIds = schools.reduce((record, school) => {
    record[school.id] = true;
    return record;
  }, {});

  const studentsBySchoolId = students.reduce((record, student) => {
    const schoolId = student.schoolId;
    if (schoolId && record[schoolId]) {
      if (Array.isArray(record[schoolId])) {
        record[schoolId].push(student);
      } else {
        record[schoolId] = [student];
      }
    }
    return record;
  }, schoolIds);

  return studentsBySchoolId;
};

const calculateGpas = (students = [], schools = []) => {
  const studentsBySchoolId = makeRecords(students, schools);

  return schools.reduce((record, school) => {
    record[school.name] = [school, findAvgGpa(studentsBySchoolId[school.id])];
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
  return findHighestGpa(gpas);
};

export default findSchoolWithHighestGPA;
