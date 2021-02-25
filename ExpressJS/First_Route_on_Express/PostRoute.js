const router = require('express').Router();
const { 
    getPost,
    sendPost,
    deletePost,
    updatePost
} = require('./RouterController');

// *** here only do refferance of eveery function. Not call them ***
router.get('/', getPost)
router.post('/', sendPost)
router.delete('/:postId', deletePost)
router.put('/:postId', updatePost)

module.exports = router;