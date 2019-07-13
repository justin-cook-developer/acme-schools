const { connection, Student, School } = require('./server/db/index');

const makeSchool = (name, imageURL) => ({ name, imageURL });
const makeStudent = (firstName, lastName, email, GPA) => ({
  firstName,
  lastName,
  email,
  GPA,
});

const schoolsData = [
  makeSchool(
    'Cuesta',
    'https://upload.wikimedia.org/wikipedia/en/a/a1/Cuestacollege.png'
  ),
  makeSchool('UCSD'),
  makeSchool('Cal Poly'),
  makeSchool('UCSB'),
  makeSchool('CSUMB'),
];
const studentsData = [
  makeStudent('Justin', 'Cook', 'justin@gmail.com', 3.5),
  makeStudent('Blake', 'Adams', 'blake@gmail.com', 3.5),
  makeStudent('Alex', 'Hinerman', 'alex@gmail.com', 3.7),
  makeStudent('Alec', 'Nevis', 'alec@gmail.com', 3.1),
  makeStudent('Jeff', 'Smith', 'jeff@gmail.com', 3.9),
];

connection
  .sync({ force: true })
  .then(async () => {
    const creatingSchools = schoolsData.map(sch => School.create(sch));
    const creatingStudents = studentsData.map(stud => Student.create(stud));

    const schools = await Promise.all(creatingSchools);
    const students = await Promise.all(creatingStudents);

    const creatingAssociations = schools.slice(0, 3).map((school, i) => {
      const student = students[i];
      return student.setSchool(school);
    });

    await Promise.all(creatingAssociations);
  })
  .then(() => console.log('Seed success!'))
  .catch(console.error);
