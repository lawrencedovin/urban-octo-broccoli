const express = require('express');
const ExpressError = require('./expressErrors');
const app = express();

const { mean, median, mode } = require('./helpers');

app.use(express.json());

app.get("/mean", (req, res, next) => {
    try {
        if (!req.query.nums) {
            throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
        }
        const nums = req.query.nums.split(',').map((num) => {
            if(isNaN(parseInt(num))) {
                return next(new ExpressError(`The value '${num}' is not a valid number.`, 400));
            }
            return parseInt(num);
        });
        let result = mean(nums);
        return res.json({
            response: {
                operation: "mean",
                value: result
            }
        });
    }
    catch(error) {
        next(error);
    }
});

app.get("/median", (req, res, next) => {
    try {
        if (!req.query.nums) {
            throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
        }
        const nums = req.query.nums.split(',').map((num) => {
            if(isNaN(parseInt(num))) {
                return next(new ExpressError(`The value '${num}' is not a valid number.`, 400));
            }
            return parseInt(num);
        });
        let result = median(nums); 
        return res.json({
            response: {
                operation: "median",
                value: result
            }
        });
    }
    catch(error) {
        next(error);
    }
});

app.get("/mode", (req, res, next) => {
    try {
        if (!req.query.nums) {
            throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
        }
        const nums = req.query.nums.split(',').map((num) => {
            if(isNaN(parseInt(num))) {
                return next(new ExpressError(`The value '${num}' is not a valid number.`, 400));
            }
            return parseInt(num);
        });

        let result = mode(nums);

        return res.json({
            response: {
                operation: "mode",
                value: result
            }
        });
    }
    catch(error) {
        next(error);
    }
});

// Default 404 error
app.use((req, res, next) => {
    const error = new ExpressError("Page Not Found", 404);
    next(error);
})

app.use((error, req, res, next) => {
    // the default status is 500 Internal Server Error
    let {status, message} = error;
    res.status(status).json({
        error: {message, status}
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});