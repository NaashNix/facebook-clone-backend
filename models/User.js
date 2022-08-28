const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
    },
    sureName: {
      type: String,
      require: true,
    },
    gender: {
      type: String,
      require: true,
    },
    birthday: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    phoneNumber: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User',User);
