const express = require('express');
const app = express();
const notFound = require('./notFoundRoute');
const PORT = process.env.PORT || 8080;
const fs = require('fs');
const morgan = require('morgan');

// app.use(morgan('combined'));

app.get('/hello',morgan('dev'), (req, res) => {
    fs.readFile('./index.html', (err, data) => {
        res.write(data)
        res.end();
    })
})

app.get('/help', (req, res) => {
    res.send(`<h1>Listen form Help Page</h1>`)
})

app.get('/about', (req, res) => {
    res.send(`<h1>Listen form About Page</h1>`)
})

app.get('/', (req, res) => {
    res.send(`<h1>Listen form PORT ${PORT}</h1>`)
})


notFound(app);
app.listen(PORT)