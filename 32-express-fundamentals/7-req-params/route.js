const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('homepage');
});

const greetings = {
    en: "hello",
    fr: "bonjour",
    ph: "mabuhay",
    js: "konichiwa"
}

app.get('/greet/:language', (req, res) => {
    res.send(greetings[req.params.language]);
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
});