const mongoose = require("mongoose");

const GraphSchema = mongoose.Schema({
    _id: Number,
    user_id: String,
    nodes: [{
        id: String,
        name: String,
        value: String
    }],
    edges: [{
        id: String,
        source: String,
        target: String
    }]
})

const User = module.exports = mongoose.model('User', UserSchema);