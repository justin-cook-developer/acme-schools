const Sequelize = require('sequelize');
const { connection, Model } = require('./connection');

class Student extends Model {}
Student.init(
  {},
  {
    sequelize: connection,
    modelName: 'student',
  }
);

module.exports = Student
