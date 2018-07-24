const mongoose = require('../db/connectdb')
const { Schema } = mongoose
const User = require('../users/user')
const autopopulate = require('mongoose-autopopulate')
const workshopSchema = require('../workshops/Workshop')
const userSchema = require('../users/user')
const organisationSchema = require('../organisations/organisation')

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
    title: [{
        id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Workshops',
            autopopulate: true,
        }
    }],
    facilitators: String,
    facilitatorObjs: [
        {
        id:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Users',
            autopopulate: true,
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
    organisation: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Organisations',
            autopopulate: true,
        }
    },
    bookings: [bookingSchema]
})
eventSchema.plugin(autopopulate);

const Event = mongoose.model('Event', eventSchema, 'events')

module.exports = Event