const router = require("express").Router();
const Post = require('../model/Post');
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
const User = require('../model/User');


router.post('/', async (req, res) => {

    // create a new post
    const post = new Post({
        title: req.body.title,
        body: req.body.body,
        image: req.body.image
    });
    try {
        const savePost = await post.save();
        res.send(savePost);

    } catch (error) {
        console.log(error)
        res.status(400).send(error);

    }
});


//  get all post 

router.get('/', (req, res, next) => {
    Post.find((err, posts) => {
        if (err) return next(err)
        res.json(posts)
    })
})
 



module.exports = router;