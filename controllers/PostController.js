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
