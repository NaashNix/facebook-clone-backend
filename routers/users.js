const express = require('express');
const router = express.Router();
const User = require('../models/user');


router.get('/', async (req, res) => {

        try {
                const users = await User.find();
                res.json(users);
        } catch (error) {
                res.send('Error : ' + error);
        }

});

router.post('/', async (res, req) => {

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
                const saved = await user.save()
                res.json(saved);      
        } catch (error){
                res.send('Error')
        }

});

module.exports = router;