const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const login = new Schema({
    email: String,
    password: String
})

module.exports = mongoose.model("Login", login);