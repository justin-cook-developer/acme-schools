const { connection } = require('./connection');
const Student = require('./student');
const School = require('./school');
const User = require('./user');

Student.belongsTo(School);
School.hasMany(Student);

module.exports = {
  Student,
  School,
  User,
  connection,
};
