const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? statusCode : 500
  res.staus(statusCode)
  res.json({
    message: err.message,
  })
}

module.exports = errorHandler
