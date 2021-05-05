const express = require('express');
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
    // if (!user) return res.status(404).send("NOT FOUND");
    // if (!user) throw MyError("invalid username", 404);
    if (!user) throw "Invalid username";
    return res.send({ user });
})

app.get("/secret", (req, res) => {
    throw TypeError("NOT GOOD BAD :(");
    if (req.query.password != "popcorn") {
        return res.status(403).send("INVALID PASSWORD!");
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