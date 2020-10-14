const {logger} = require('../logger/logger')
let errorHandler = (err, req, res, next) => {
    console.error(err.message)
    if (!err.statusCode) {
         err.statusCode = 500
    }
    logger.log('error',err.message)
    res.status(err.statusCode).send(err.message)
  }

  module.exports = {errorHandler}