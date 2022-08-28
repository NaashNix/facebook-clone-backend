const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    userID : {
        type : String ,
        require : true
    },
    date: {
        type: String,
        require: true
    },
    time: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Post', postSchema);