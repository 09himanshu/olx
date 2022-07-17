
const mongoose = require('mongoose');

const Item = new mongoose.Schema({
    item_name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }, 
    price: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    purchase_year: {
        type: Number,
        required: true,
    },
    postedAt: {
        type: Date,
        immutable: true,
        default: () => { return Date.now()}
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
})

module.exports = mongoose.model('items', Item);