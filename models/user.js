const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
    name: String,
    password: String,
    email: {
        type: String,
        unique: true
    },
    login: {
        type: String,
        unique: true
    },
    role: String
})

module.exports = mongoose.model("User", user);