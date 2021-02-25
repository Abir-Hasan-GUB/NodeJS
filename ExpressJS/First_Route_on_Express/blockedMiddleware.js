//blcok a page by custom middleware
function customMidddleware(req, res, next){
    // console.log("Looged In from Custom Middleware!");

    if(req.url === '/hello'){
        // console.log(req.url);
        res.send(`<h1>This page blocked by Admin</h1>`);
    }else next();
}
module.exports = customMidddleware;