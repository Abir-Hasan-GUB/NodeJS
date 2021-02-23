const http = require('http');
const fs = require('fs');

const sarver = http.createServer((req, res) => {
    fs.readFile('./httpProject.html', (err, data) => {
        if (err) {
            res.write(`<h1>Ohhh Nooooo !!!!</h1>` + err);
            res.end();
        }
        else {
            res.write(data);
            res.end();
        }
    })
})

sarver.listen(4000, () => {
    console.log("Server Connected !")
})