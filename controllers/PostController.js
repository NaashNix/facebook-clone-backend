const express = require("express");
const route = express.Router();
const app = express();
const Post = require("../models/Post");
const dotenv = require("dotenv");

dotenv.config({ path: "config.env" });
app.use(express.json());

const getAllPosts = (req, res) => {
  Post.find()
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
};

const updatePost = async (req, res) => {
  try {
    const myPost = new Post(req.body);
    const id = req.body._id;
    console.log(id, myPost.title, myPost.body);
    const updateRow = { _id: id };
    let newValues = { $set: { title: myPost.title, body: myPost.body } };
    await myPost.updateOne(updateRow, newValues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
    });
  } catch (err) {
    res.status(500).json(err);
  }
};



const getPostByID = (req, res) => {
  const id = req.body._id;

  Post.findOne({ $or: [{ _id: id }] })
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
};
