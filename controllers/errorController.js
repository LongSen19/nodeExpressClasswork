const httpStatus = require('http-status-codes')

exports.pageNotFoundError = (req, res) => {
    let errorCode = httpStatus.StatusCodes.NOT_FOUND;
    res.status(errorCode);
    res.render('error');
}

exports.internalServerError = (error, req, res, next) => {
    let errorCode = httpStatus.StatusCodes.INTERNAL_SERVER_ERROR;
    res.status(errorCode);
    res.send(`${errorCode}, Sorry! Something went wrong with your appliation`);
    console.error(error.stack);
}