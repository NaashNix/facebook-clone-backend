const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Post = require('../models/post');
const { db } = require('../models/user');


router.get('/', async (req, res) => {

        try {
                const users = await User.find();
                res.json(users);
        } catch (error) {
                res.send('Error : ' + error);
        }

});

router.get('/posts/:id',async (req,res)=>{
        const userID = req.params.id;

        try{
                const posts = await Post.find({userID : userID});
                res.json(posts);
        }catch (err){
                res.send(err);
        }
        
})

router.post("/", async (req, res) => {

        const user = new User({
                firstName: req.body.firstName,
                surname: req.body.surname,
                gender: req.body.gender,
                birthday: req.body.birthday,
                password: req.body.password,
                phoneNumber: req.body.phoneNumber,
                email: req.body.email
        });

        try {
                const saved = await user.save();
                res.json(saved);
        } catch (error) {
                res.send('Error');
        }

});

router.get('/:id', async (req, res) => {
        try {
                const user = await User.findById(req.params.id);
                res.json(user);
        } catch (error) {
                res.send(error);
        }
});

router.patch('/:id', async (req, res) => {
        try {
                const user = await User.findById(req.params.id);
                if (user != null) {

                        console.log('User is not null' + user._id);

                        const updatedUser = new User({
                                firstName: req.body.firstName,
                                surname: req.body.surname,
                                gender: req.body.gender,
                                birthday: req.body.birthday,
                                password: req.body.password,
                                phoneNumber: req.body.phoneNumber,
                                email: req.body.email
                        });

                        const result = await updatedUser.save();
                        res.json(result);


                }
        } catch (error) {
                res.send(error);
        }
});

router.delete("/:id", async (req, res) => {
        try {
                const user = await User.findById(req.params.id);
                const result = await user.delete(user);
                res.json(result);       
        } catch (err) {
                res.send("Error : " + err);
        }
});


module.exports = router;