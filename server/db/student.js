const Sequelize = require('sequelize');
const { connection, Model } = require('./connection');

class Student extends Model {}
Student.init(
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    GPA: {
      type: Sequelize.FLOAT,
      allowNull: false,
      validate: {
        min: 0.0,
        max: 5.0,
      },
    },
  },
  {
    sequelize: connection,
    modelName: 'student',
  }
);

module.exports = Student;
