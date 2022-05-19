const AppError = require('./../utils/appError')

const handleCastErrorDB = err => {
  const message = `Invalid ${err.path}: ${err.value}`
  return new AppError(message, 400);
};

const handleDuplicateErrorDB = err => {
  const message = `Duplicate field name: ${err.keyValue.name}`
  return new AppError(message, 400);
};

const handleValidationErrorDB = err => {
  const message = `Duplicate field name: ${err.keyValue.name}`
  return new AppError(err.message, 401);
};

const handleJWTError = () => {
  return new AppError('Invalid token, please login again!', 401);
};

const TokenExpiredError = () => {
  return new AppError('Log In Session has expired!', 401);
};

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    // stack: err.stack
  });
};

const sendErrorProd = (err, res) => {
  // Operational, Trusted Error, then send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });   
  // Programming or other unknown error, then don't leak deatils
  } else {
    // 1. Log Error
    console.error('error:', err);
    // 2. Send generic message
    res.status(500).json({
      status: 'error',
      message: 'something went wrong',
    }); 
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  if (process.env.NODE_ENV === 'development') {
    console.log(err);
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    // let error = { ...err }; Not Working
       let newErr = Object.create(err);
    // let newErr = JSON.parse(JSON.stringify(err));
    if (newErr.name === 'CastError') newErr = handleCastErrorDB(newErr);
    if (newErr.code === 11000) newErr = handleDuplicateErrorDB(newErr);
    if (newErr.name === 'ValidationError') newErr = handleValidationErrorDB(newErr);
    if (newErr.name === 'JsonWebTokenError') newErr = handleJWTError();
    if (newErr.name === 'TokenExpiredError') newErr = TokenExpiredError();
    sendErrorProd(newErr, res);
  } 
};


// module.exports = (err, req, res, next) => {
//   err.statusCode = err.statusCode || 500;
//   err.status = err.status || 'error';
//   // let newErr = Object.create(err);
//   // let newErr = JSON.parse(JSON.stringify(err));
//   console.log(err.name, newErr.name);
//   res.status(err.statusCode).json({
//     status: err.status,
//     error: err,
//     message: err.message,
//     stack: err.stack
//   });
// };