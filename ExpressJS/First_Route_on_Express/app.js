const express = require('express');
const app = express();
const notFound = require('./notFoundRoute');
const PORT = process.env.PORT || 8080;
const fs = require('fs');
const morgan = require('morgan');
const middleware = [tinnyLogger()];
const userRouter = require('./userRoute');
const PostRoute = require('./PostRoute');
const commonRouter = require('./commonRouter');
const blockedMiddleWare = require('./blockedMiddleware');

// User Route (Custom multidimentonal Route)
app.use('/user' , userRouter) //create router group of user
app.use('/posts', PostRoute) //create router group of post

//custom middleware
function tinnyLogger(){
    return (req, res, next) => {
        console.log(`From Tinny Logger: ${req.url} - ${req.method}`)
        next();
    }
}

app.use(blockedMiddleWare) //call custom middleware function
app.use(middleware); // print request information by this middleware
commonRouter(app, morgan, PORT,fs); // call commonRouter
notFound(app); // call not found router

app.listen(PORT) //initialize port