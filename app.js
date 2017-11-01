const path = require('path');
const express = require('express');
const routes = require('./server/routes/routes.js');
const app = express();

// Set view engine and views directory
app.set('views', './server/views');
app.set('view engine', 'pug');

// Create static routes
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/static', express.static(path.join(__dirname, 'client', 'src')));

// Retrieve routes
app.use(routes);

app.listen(3000, function() {
    console.log('Expess server started: listening on port 3000.');
});
