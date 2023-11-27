const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamFootball = new Schema({
    name: String,
    city: String,
    email: {
        type: String,
        unique: true
    }
})

module.exports = mongoose.model("Team", teamFootball);