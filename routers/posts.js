const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const { route } = require('./users');

router.get('/', async (req, res) => {

    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.send('Error : ' + error);
    }

});


router.get('/:id', async (req, res) => {

    try{
        const post = await Post.findById(req.params.id);
        const result = await Post.delete(post);
    }catch (error) {    
        res.semd(err);
    }   

});


router.post("/", async (req, res) => {

    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    const post = new Post({
        userID : req.body.userID,
        date : today,
        time : time,
        title: req.body.title,
        body: req.body.body
    });

    try {
        const saved = await post.save();
        res.json(saved);
        
    } catch (error) {
        res.send('Error');
    }

});


router.patch('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post != null) {

            console.log('User is not null' + post._id);

            const updatedPost = new Post({
                userID: req.body.userID,
                date: req.body.date,
                time : req.body.time,
                title: req.body.title,
                body: req.body.body
            });

            const result = await updatedPost.save();
            res.json(result);


        }
    } catch (error) {
        res.send(error);
    }
});

router.delete('/:id', async (req,res)=> {
    try {
        const post = await Post.findById(req.params.id);
        const result = await post.delete(post);
        res.json(result);
    } catch (err) {
        res.send("Error : " + err);
    }
});



module.exports = router;