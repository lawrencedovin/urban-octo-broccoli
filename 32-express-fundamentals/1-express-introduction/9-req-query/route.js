const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('homepage');
});

const greetings = {
    en: "hello",
    fr: "bonjour",
    ph: "mabuhay",
    jp: "konichiwa"
}

app.get('/greet/:language', (req, res) => {
    const {language} = req.params;
    const greeting = greetings[language];
    greeting ? res.send(greeting) : res.send('Invalid language');
});

app.get('/search', (req, res) => {
    const {term, sort} = req.query;
    return res.send(`SEARCH PAGE Term is: ${term} and Sort is: ${sort}`);
})


app.listen(3000, () => {
    console.log('Server running on port 3000');
});