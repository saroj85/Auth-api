const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        max: 1000,
        required: true
    },
    body: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },
    file: {
        type: String,
        require: false
    },
    date: {
        type: Date,
        default: Date.now
    },


})

module.exports = mongoose.model("Post", postSchema);