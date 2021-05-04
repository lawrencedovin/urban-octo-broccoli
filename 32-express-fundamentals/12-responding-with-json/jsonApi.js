const express = require('express');
const app = express();

app.use(express.json());

const CANDIES = [
    {name: 'snickers', quantity: 43, price: 1.50},
    {name: 'reeses', quantity: 26, price: 1.75},
]

app.get('/candies', (req, res) => {
    res.json(CANDIES);
})

app.post('/candies', (req, res) => {
    CANDIES.push(req.body);
    res.json(CANDIES);
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});