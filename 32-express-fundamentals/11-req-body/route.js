const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

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
});

app.get('/show-me-headers', (req, res) => {
    console.log(req.rawHeaders);
    console.log(req.headers);
    res.send(req.headers);
});

app.get('/show-language', (req, res) => {
    const lang = req.headers['accept-language'];
    res.send(`Your language preference is: ${lang}`);
});

app.post('/register', (req, res) => {
    res.send(`Welcome, ${req.body.username}!`);
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
});