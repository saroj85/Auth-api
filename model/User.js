const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: false,
        min: 3,
        max: 255
    },
    middleName: {
        type: String,
        required: false,
        min: 2,
        max: 255
    },
    lastName: {
        type: String,
        required: false,
        min: 2,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },

    password: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    profilePic: {
        type: String,
        required: false,
    },
    dob: {
        type: String,
        required: false,
    },
    date: {
        type: Date,
        default: Date.now
    },

})

module.exports = mongoose.model("User", userSchema);