const path = require('path');
const express = require('express');
const morgan = require('morgan');

const parseErrors = require('./parseErrors/index');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

express.static(path.join(__dirname, '..', 'public'));

app.use('/api', require('./api/index'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
);

app.use((e, req, res, next) => {
  // this only works for the Student model
  if (
    e.name === 'SequelizeValidationError' ||
    e.name === 'SequelizeUniqueConstraintError'
  ) {
    res.json(parseErrors(e.errors));
    return;
  }
  next(e);
});

module.exports = app;