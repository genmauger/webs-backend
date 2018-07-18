const mongoose = require('../db/connectdb')
const { Schema } = mongoose


const notificationSchema = new Schema({
    message: String,
    recipient: String,
    time: Date,
    unread: Boolean
})



const Notification = mongoose.model('notifications', notificationSchema)

module.exports = Notification