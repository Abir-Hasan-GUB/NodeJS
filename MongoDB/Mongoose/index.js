const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')

const app = express();



app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan('dev'));

let Schema = mongoose.Schema
let testSchema = new Schema({
    name: String
})
let Test = mongoose.model('Test', testSchema)


app.get('/', (req, res) => {
    let test = new Test({
        name:'HM Nayem'
    })

    test.save()
        .then(t => {
            res.json(t)
        })
        .catch(e => {
            console.log(e)
            res.status(500).json({
                error: 'Error Occurred'
            })
        })
})

const PORT = process.env.PORT || 8080;

mongoose
    .connect(`mongodb+srv://test:test@cluster0.19f5u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        app.listen(PORT, () =>{
            console.log(`Server Connect at port ${PORT}`);
        })
    })
    .catch(err => {
        console.log(err)
    })