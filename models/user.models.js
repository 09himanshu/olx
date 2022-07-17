

const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: {
        type: String,

    },
    email: {
        type: String,
       
    },
    password: {
        type: String,
        
    },
    postId: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'items'
    }
})

module.exports = mongoose.model('user', User);