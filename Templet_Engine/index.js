const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan('dev'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // res.send('Working with Templet_Engine !');
    const post = {
        title: 'Post Title',
        body: 'Post Body',
        publisched: false
    }

    const posts = [
        {title: 'One', author: 'abir'},
        {title: 'Two', author: 'abir'},
        {title: 'THree', author: 'abir'},
        {title: 'Four', author: 'abir'}
    ]

    res.render('pages/index', {title: 'EJS is Awesome Templage Engine !',posts, post})
})

app.get('/about', (req, res) => {
    res.render('pages/about')
})

app.get('/help', (req, res) => {
    res.render('pages/help')
})


const PORT = process.env.PORT || 8080;
app.listen(PORT , ()=>{
    console.log(`Server runnig at PORT ${PORT}`);
});