const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamFootball = new Schema({
    name: String,
    city: String
})

module.exports = mongoose.model("Team", teamFootball);