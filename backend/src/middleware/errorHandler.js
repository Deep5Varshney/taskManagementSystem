const errorHandler = (err, req, res, next) => {
  console.error(`[Error]: ${err.message}`, err.stack);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    error: {
      code: statusCode,
      message: err.message || "Internal Server Error",
    },
  });
};

module.exports = errorHandler;