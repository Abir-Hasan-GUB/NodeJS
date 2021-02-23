const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(res.end(`<h1>Welcome to New Server !</h1>`));
})

server.listen(4000, ()=>{
    console.log(`Server is running at port 4000`);
})