const express = require('express');
const app = express();

app.get('/dogs', (req, res) => {
    return res.send('<h1>Dogs go brk brk</h1>');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});