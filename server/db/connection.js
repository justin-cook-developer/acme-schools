const Sequelize = require('sequelize');

const url = process.env.DATABASE_URL || 'postgres://:5432/acme-schools';

const connection = new Sequelize(url, {
  logging: false,
});

const Model = Sequelize.Model;

module.exports = {
  connection,
  Model,
};
