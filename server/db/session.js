const { STRING, DATE } = require('sequelize');
const { connection: db } = require('./connection');

const Session = db.define('session', {
  sid: {
    type: STRING,
    primaryKey: true,
  },
  userId: STRING,
  expires: DATE,
  data: STRING(50000),
});

module.exports = Session;
