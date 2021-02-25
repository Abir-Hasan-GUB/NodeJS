const express = require('express');
const app = express();
const notFound = require('./notFoundRoute');
const PORT = process.env.PORT || 8080;
const fs = require('fs');
const morgan = require('morgan');
const middleware = [tinnyLogger()];
app.use(middleware);
const userRouter = require('./userRoute');
const PostRoute = require('./PostRoute');
const commonRouter = require('./commonRouter');
commonRouter(app, morgan, PORT,fs);

// User Route (Custom multidimentonal Route)
app.use('/user' , userRouter)
app.use('/posts', PostRoute)

function tinnyLogger(){
    return (req, res, next) => {
        // console.log(`Tinny Logger: ${req.url} - ${req.method}`)
        next();
    }
}


app.get('/products/:prodId', (req, res) => {
    console.log(req.query)
    res.send("Enterd ID is ==> " + req.params.prodId);
})

function customMidddleware(req, res, next){
    // console.log("Looged In from Custom Middleware!");

    if(req.url === '/hello'){
        // console.log(req.url);
        res.send('This page blocked by Admin');
    }else next();
}

app.use(customMidddleware)


notFound(app);
app.listen(PORT)