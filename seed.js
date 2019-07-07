const { connection, Student, School } = require('./server/db/index');

const makeSchool = name => ({ name });
const makeStudent = (firstName, lastName, email, GPA) => ({
  firstName,
  lastName,
  email,
  GPA,
});

const schoolsData = [
  makeSchool('Cuesta'),
  makeSchool('UCSD'),
  makeSchool('Cal Poly'),
];
const studentsData = [
  makeStudent('Justin', 'Cook', 'justin@gmail.com', 3.5),
  makeStudent('Blake', 'Adams', 'blake@gmail.com', 3.5),
  makeStudent('Alex', 'Hinerman', 'alex@gmail.com', 3.7),
];

connection
  .sync({ force: true })
  .then(async () => {
    const creatingSchools = schoolsData.map(sch => School.create(sch));
    const creatingStudents = studentsData.map(stud => Student.create(stud));

    const schools = await Promise.all(creatingSchools);
    const students = await Promise.all(creatingStudents);

    const creatingAssociations = schools.map((school, i) => {
      const student = students[i];
      return student.setSchool(school);
    });

    await Promise.all(creatingAssociations);

    console.log('Seed success!');
  })
  .catch(console.error);
