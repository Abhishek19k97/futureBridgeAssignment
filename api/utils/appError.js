class AppError extends Error{
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'failed' : 'error';
    this.isOperational = true;

    // this way when a new Object(instance) is created and the constructor function is called, then that function call will not appear in the stack trace and will not pollute it.
    Error.captureStackTrace(this, this.constructor)

  }

};

module.exports = AppError;