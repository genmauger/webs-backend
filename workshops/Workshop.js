const mongoose = require('../db/connectdb')
const { Schema } = mongoose

const workshopSchema = new Schema({
    workshop_name: String,
    skills_required: Array
})

const Workshop = mongoose.model('Workshops', workshopSchema)

module.exports = Workshop