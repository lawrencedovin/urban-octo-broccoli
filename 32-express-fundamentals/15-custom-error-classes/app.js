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
    const user = USERS.find(u => u.username === req.params.username);
    if(!user) throw new ExpressError("Invalid username", 404);
    return res.send({ user });
})

app.get("/secret", (req, res) => {
    if (req.query.password != "popcorn") {
        throw new ExpressError("Invalid password", 403);
    }
    return res.send("CONGRATS YOU KNOW THE PASSWORD");
})

app.get("/savetodb", (req, res) => {
    attemptToSaveToDB()
    return res.send("SAVED TO DB!");
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
});