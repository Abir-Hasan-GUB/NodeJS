module.exports = function(app){
    app.get('*', (req, res) => {
        res.send(`<h1>404 Not Found</h1>`)
    })
}