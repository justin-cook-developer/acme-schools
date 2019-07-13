const path = require('path');
const express = require('express');
const morgan = require('morgan');

const parseErrors = require('./parseErrors/index');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/api', require('./api/index'));

app.use((req, res) =>
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
  } else if (
    e.name === 'SequelizeDatabaseError' &&
    e.message === 'invalid input syntax for type double precision: ""'
  ) {
    res.json({ errors: { GPA: 'GPA is required.' } });
  }
  next(e);
});

module.exports = app;
