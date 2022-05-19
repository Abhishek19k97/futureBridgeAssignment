const express = require('express');
const cors = require('cors');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const movieRouter = require('./routes/moviesRoutes');

const app = express();

app.use(cors());


// Body Parser, reading data from body into req.body
app.use(express.json());  

// 3) ROUTES
app.use('/api/movies', movieRouter);

// HANDLING UNHANDLED ROUTES
app.use('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404))
}) 

// GLOBAL ERROR HANDLER
app.use(globalErrorHandler);

module.exports = app;

