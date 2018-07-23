const mongoose = require('../db/connectdb')
const { Schema } = mongoose

const workshopSchema = new Schema({
    workshop_name: String,
    skills_required: Array
})

const Workshop = mongoose.model('workshop', workshopSchema)

module.exports = Workshop