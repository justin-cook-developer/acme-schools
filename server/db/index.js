const { connection } = require('./connection');
const Student = require('./student');
const School = require('./school');

Student.belongsTo(School);
School.hasMany(Student);

module.exports = {
  Student,
  School,
  connection,
};
