const mongoose = require('../db/connectdb')
const { Schema } = mongoose


const roomSchema = new Schema({
    room: String,
})

const locationSchema = new Schema({
    street_add: String,
    suburb: String,
    state: String,
    pcode: String,
    longitude: Number,
    latitude: Number,
    rooms: [roomSchema]
})

const organisationsSchema = new Schema({
    org_name: {
        type: String,
        unique: true,
        required: true,
        index: true
    },
    contact_name: String,
    contact_no: String,
    contact_email: String,
    locations: [locationSchema]
})




const Organisation = mongoose.model('Organisations', organisationsSchema)

module.exports = Organisation