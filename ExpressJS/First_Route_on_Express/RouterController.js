exports.getPost = (req, res) => {
    res.send("Render All Post");
}

exports.sendPost = (req, res) => {
    res.send("Create New Post");
}

exports.deletePost = (req, res) => {
    console.log(req.query)
    res.send("Delete Post on id: " + req.params.postId);
}

exports.updatePost = (req, res) => {
    res.send("Post Updated ! on id: " + req.params.postId);
}