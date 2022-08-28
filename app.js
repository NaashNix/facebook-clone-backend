const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://fb";
const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;


con.on("open", function () {
        console.log("connected!");
});

const userRouter = require('../Facebook-Cloned-Backend/routers/users')
app.use('/user',userRouter);

const postRouter = require('../Facebook-Cloned-Backend/routers/posts')
app.use('post',postRouter)

app.listen(3000, () => {
        console.log("server started!");
});
