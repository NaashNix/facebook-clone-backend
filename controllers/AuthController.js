const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hashedPassword) {
    if (err) {
      res.json({
        error: err,
      });
    }

    let user = new User({
      firstName: req.body.firstName,
      sureName: req.body.sureName,
      gender: req.body.gender,
      birthday: req.body.birthday,
      password: hashedPass,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
    });
  });

  user.save().then(user => {
    res.json({
      message : 'user added!'
    })
  }).catch(error => {
    res.json({message : 'an error occurred!'})
  })

};


const deleteUser = (req,res) => {
  const id = req.body._id;
  

}
