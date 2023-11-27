const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const origen = new Schema({
    city: String,
    year: Number
})

module.exports = mongoose.model("Origen", origen);