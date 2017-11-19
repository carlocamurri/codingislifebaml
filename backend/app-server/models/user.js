const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    _id: Number,
    name: String,
    password: String
});

const User = module.exports = mongoose.model('User', UserSchema);