const router = require('express').Router();

router.get('/', (req, res) => {
    res.send("Render All Post");
})

router.post('/', (req, res) => {
    res.send("Create New Post");
})

router.delete('/:postId', (req, res) => {
    console.log(req.query)
    res.send("Delete Post on id: " + req.params.postId);
})

router.put('/:postId', (req, res) => {
    res.send("Post Updated ! on id: " + req.params.postId);
})


module.exports = router;