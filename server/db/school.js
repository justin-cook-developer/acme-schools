const Sequelize = require('sequelize');
const { connection, Model } = require('./connection');

class School extends Model {}
School.init(
  {},
  {
    sequelize: connection,
    modelName: 'school',
  }
);

module.exports = School
