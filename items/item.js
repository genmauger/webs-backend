const mongoose = require('../db/connectdb')
const { Schema } = mongoose

const bookingSchema = new Schema({

    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    location: String
})

const itemSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true,
        index: true
    },
    facilitators: String,
    attendees: Number,
    status: String,
    creator: String,
    notes: String,
    onsite: Boolean,
    price: Number,
    organisation: String,
    bookings: [bookingSchema]
})

const Item = mongoose.model('item', itemSchema)

module.exports = Item