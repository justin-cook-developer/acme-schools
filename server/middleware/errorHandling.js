const parseErrors = require('../parseErrors/index');

const middleware = (e, req, res, next) => {
  // this only works for the Student model
  if (
    e.name === 'SequelizeValidationError' ||
    e.name === 'SequelizeUniqueConstraintError'
  ) {
    console.log('gen errors!!!!');
    res.json(parseErrors(e.errors));
    return;
  } else if (
    e.name === 'SequelizeDatabaseError' &&
    e.message === 'invalid input syntax for type double precision: ""'
  ) {
    res.json({ errors: { GPA: 'GPA is required.' } });
    return;
  }
  next(e);
};

module.exports = middleware;
