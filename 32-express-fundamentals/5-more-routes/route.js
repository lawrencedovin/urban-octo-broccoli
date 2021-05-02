const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.send('Homepage');
});

app.get('/dogs', (req, res) => {
    return res.send('<h1>Dogs go brk brk</h1>');
});

app.get('/chickens', () => {
    res.send('BOCK BOCK BOCK (get request)');
})

app.post('/chickens', function createChicken(req, res) {
    res.send('YOU CREATED A NEW CHICKEN (not really) (Post request)');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});