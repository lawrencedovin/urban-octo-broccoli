const express = require('express');
const ExpressError = require('./expressErrors');
const app = express();

const { convertAndValidateNums } = require('./helpers');

app.use(express.json());

function attemptToSaveToDB() {
    throw "Connection Error!";
}

app.get("/mean", (req, res, next) => {
    try {
        // const nums = req.query.nums.split(',').map((num) => {
        //     if(isNaN(parseInt(num))) {
        //         return next(new ExpressError(`The value '${num}' is not a valid number.`, 400));
        //     }
        //     return parseInt(num);
        // });
        const nums = convertAndValidateNums(req.query.nums);
        let mean = nums.reduce((a, b) => a + b, 0) / nums.length;
        return res.json({
            response: {
                operation: "mean",
                value: mean
            }
        })
    }
    catch(error) {
        next(error);
    }
});


// app.get("/secret", (req, res, next) => {
//     try {
//         if (req.query.password != "popcorn") {
//             throw new ExpressError("Invalid password", 403);
//         }
//         return res.send("CONGRATS YOU KNOW THE PASSWORD");
//     }
//     catch(error) {
//         next(error);
//     }
// })

// app.get("/savetodb", (req, res, next) => {
//     try {
//         attemptToSaveToDB();
//         return res.send("SAVED TO DB!");
//     }
//     catch(error){
//         return next(new ExpressError("Database Error"));
//     }
// });

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