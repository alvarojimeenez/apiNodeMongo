const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const footballPlayer = new Schema({
    name: String,
    age: Number,
    team: String
})

module.exports = mongoose.model("FootballPlayer", footballPlayer);