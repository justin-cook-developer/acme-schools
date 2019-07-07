const path = require('path');
const express = require('express');
const morgan = require('morgan');

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
  next(e);
});

module.exports = app;
