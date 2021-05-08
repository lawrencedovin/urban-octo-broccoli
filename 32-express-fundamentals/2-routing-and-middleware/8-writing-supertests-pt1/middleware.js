const ExpressError = require('./expressErrors');

function logger(req, res, next) {
    console.log(`Received a ${req.method} request to ${req.path}.`);
    return next();
}

function checkForPassword(req, res, next) {
    try {
        if(req.query.password !== 'monkeybreath') {
            throw new ExpressError("Missing Password", 402);
        }
        else {
            return next();
        }
    }
    catch(error) {
       return next(error);
    }
}

module.exports = {logger, checkForPassword};