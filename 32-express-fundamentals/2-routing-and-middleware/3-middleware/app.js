const express = require('express');
const ExpressError = require('./expressErrors')
const userRoutes = require('./userRoutes')
const middleware = require('./middleware');

const app = express();

app.use(express.json());

// If we want to log any incoming requests we 
// we place it above our routes.
app.use(middleware.logger);

app.use('/users', userRoutes);
// app.get('/favicon.ico', (req, res) => res.sendStatus(204));

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