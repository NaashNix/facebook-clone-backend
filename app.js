const express = require("express");
const { json } = require('express');
const mongoose = require("mongoose");
const url = "mongodb://localhost/facebook";
const app = express();
require("dotenv/config");

mongoose.connect(
        process.env.DB_CONNECTION_STRING,
        { useUnifiedTopology: true, useNewUrlParser: true },
        (req, res) => {
                console.log("Connected to the database.");
        }
);


app.use(express.json());

const userRouter = require('../Facebook-Cloned-Backend/routers/users');
app.use('/user', userRouter);

const postRouter = require('../Facebook-Cloned-Backend/routers/posts');
app.use('/post', postRouter);

app.listen(3000, () => {
        console.log("server started!");
});
