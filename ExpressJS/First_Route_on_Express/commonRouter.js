function commonRouter (app, morgan, PORT, fs){
    
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

// search product by product id
app.get('/products/:prodId', (req, res) => {
    console.log(req.query)
    res.send("Enterd ID is ==> " + req.params.prodId);
})


}

module.exports = commonRouter;