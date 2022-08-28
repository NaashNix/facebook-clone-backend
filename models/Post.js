const mongoose = require("mongoose");

const Post = new mongoose.Schema({
  userID: {
    type: String,
    require: true,
  },

  date: {
    type: String,
    require: true,
  },

  time: {
    type: String,
    require: true,
  },

  title: {
    type: String,
    require: true,
  },

  body: {
    type: String,
    require: true,
  },
},{timestamps : true});


module.exports = mongoose.model('post',Post);