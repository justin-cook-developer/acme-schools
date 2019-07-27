const path = require('path');
const express = require('express');
const morgan = require('morgan');
const compresssion = require('compression');

const {
  sessionMiddleware,
  serializeUserMiddleware,
  errorMiddleware,
} = require('./middleware/index');

const app = express();

app.use(morgan('dev'));
app.use(sessionMiddleware);
app.use(compresssion());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(serializeUserMiddleware);

app.use('/auth', require('./auth/index'));
app.use('/api', require('./api/index'));

app.use((req, res) =>
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
);

app.use(errorMiddleware);

module.exports = app;
