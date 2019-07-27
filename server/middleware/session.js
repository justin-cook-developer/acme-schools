const session = require('express-session');
const createSessionStore = require('connect-session-sequelize');
const { connection: db } = require('../db/index');

const SessionStore = createSessionStore(session.Store);

const store = new SessionStore({
  db,
  table: 'session',
  extendDefaultFields: (defaults, _session) => ({
    data: defaults.data,
    expires: defaults.expires,
    userId: _session.userId,
  }),
});

const middleware = session({
  secret: process.env.SECRET || 'bad secret',
  store,
  name: 'sid',
  saveUninitialized: true,
  resave: false,
});

module.exports = middleware;
