const path = require('path');
const express = require('express');
const morgan = require('morgan');

const { connection } = require('./db/index');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

express.static(path.join(__dirname, '..', 'public'));

app.get('/', (req, res) => res.send('yooooooooo'));

app.use((e, req, res, next) => {
  next(e);
});

connection
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening at port: ${PORT}`);
    });
  })
  .catch(console.error);
