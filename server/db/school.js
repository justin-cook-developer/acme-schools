const Sequelize = require('sequelize');
const { connection, Model } = require('./connection');

class School extends Model {}
School.init(
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    imageURL: {
      type: Sequelize.STRING,
      defaultValue: 'http://beaconenglishdayschool.com/img/school-default.jpg',
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
  },
  {
    sequelize: connection,
    modelName: 'school',
  }
);

module.exports = School;
