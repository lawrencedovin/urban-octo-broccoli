const express = require('express');
const app = express();
const catsRoutes = require('./routes/cats');
const ExpressError = require('./expressErrors');

app.use(express.json());
app.use('/cats', catsRoute);

/** 404 handler **/

app.use((req, res, next) => {
    return new ExpressError('Not Found', 404);
});

/** general error handler **/

app.use((err, req, res, next) => {
    res.status(err.status || 500);

    return res.json({
        error: err.message,
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
})