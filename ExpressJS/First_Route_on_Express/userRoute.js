const router = require('express').Router();
router.get('/login', (req, res) => {
    res.send("This is Login Page !");
})

router.get('/logout', (req, res) => {
    res.send("This is LogOut Page !");
})

router.get('/signup', (req, res) => {
    res.send("This is SignUp Page !");
})

module.exports = router;