const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    age:Number,
    email: String,
    createdAt: Date,
    updatedAt: Date,
    bestFriend: mongoose.Schema
})

module.exports = mongoose.model("User", userSchema)