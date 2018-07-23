const mongoose = require('../db/connectdb')
const { Schema } = mongoose
const User = require('../users/user')
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

const eventSchema = new Schema({
    title: {
        type: String,
        required: true,
        index: true
    },
    facilitators: String,
    facilitatorObjs: [
        {
        
        id:{
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        status: String
        }
    ],
    attendees: Number,
    status: String,
    creator: String,
    notes: String,
    onsite: Boolean,
    price: Number,
    organisation: String,
    bookings: [bookingSchema]
})

const Event = mongoose.model('event', eventSchema)

module.exports = Event