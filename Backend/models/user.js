const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    spends: [{
        _id: Number,
        category: String,
        amount: Number,
        date: String,
        time: String,
        note: String
    }]
})


const User = mongoose.model('User', userSchema);
module.exports = User;