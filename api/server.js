const dotenv = require('dotenv');

process.on('uncaughtException', err => {
  console.log(`Uncaught Exception!, Shutting down...`);
  console.log(err);
  // console.log(err.name, err.message);
  process.exit(1);
});

const app = require('./app');

const port = 8000;

const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
  // console.log(process.env);
});

process.on('unhandledRejection', err => {
  console.log(`Unhandled Rejection!, Shutting down...`);
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  })
});

