const sessionMiddleware = require('./session');
const errorMiddleware = require('./session');
const serializeUserMiddleware = require('./serializeUser');

module.exports = {
  sessionMiddleware,
  errorMiddleware,
  serializeUserMiddleware,
};
