const express = require('express');
const ExpressError = require('./expressErrors')
const app = express();

app.use(express.json());

function attemptToSaveToDB() {
    throw "Connection Error!";
}

const USERS = [
    { username: "StacysMom", city: "Reno" },
    { username: "Rosalia", city: "R" }
]

app.get("/users/:username", (req, res, next) => {
    try {
        const user = USERS.find(u => u.username === req.params.username);
        if(!user) throw new ExpressError("Invalid username", 404);
        return res.send({ user });
    } 
    catch(error) {
        next(error);
    }
})

// app.get("/mean", (req, res, next) => {
//     // try {
//         // const numsArray = req.params.nums.split(',');
//         // let mean = numsArray.reduce((a, b) => a + b) / numsArray.length;
//         console.log(req.params.nums);
//         return res.send(req.params.nums);
        // return res.json({
        //     response: {
        //         operation: "mean",
        //         value: mean
        //     }
        // })
//     // }
//     // catch(error) {
//     //     return next(new ExpressError("nums are required", 400));
//     // }
// })

app.get("/mean", (req, res, next) => {
    try {
        const nums = req.query.nums.split(',').map((num) => {
            return parseInt(num);
        });
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
})


app.get("/secret", (req, res, next) => {
    try {
        if (req.query.password != "popcorn") {
            throw new ExpressError("Invalid password", 403);
        }
        return res.send("CONGRATS YOU KNOW THE PASSWORD");
    }
    catch(error) {
        next(error);
    }
})

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