const sessionMiddleware = require('./session');
const errorMiddleware = require('./errorHandling');
const serializeUserMiddleware = require('./serializeUser');

module.exports = {
  sessionMiddleware,
  errorMiddleware,
  serializeUserMiddleware,
};
