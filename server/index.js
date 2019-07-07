const { connection } = require('./db/index');
const app = require('./app');
const PORT = process.env.PORT || 5000;

connection
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening at port: ${PORT}`);
    });
  })
  .catch(console.error);
