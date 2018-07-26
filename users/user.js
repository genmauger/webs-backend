const mongoose = require('../db/connectdb')
const { Schema } = mongoose
const bcrypt = require('bcrypt')

const skillSchema = new Schema({

    skill: {
        type: String,
        required: true
    }
})

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        index: true
    },
    password: {
        type: String,
        select: false 
    },
    role: String,
    f_name: String,
    l_name: String,
    contact_no: String,
    default_location: String,
    availability: Boolean,
    longitude: Number,
    Latitude: Number,
    skills: [skillSchema]
})


// returns a promise so it can be handled in the route
userSchema.statics.isAuthenticUser = async function(email, password) {
    const user = await this.findOne({email}).select('password')
    try {
        if(!user) {
      // return a reject promise
        return new Promise.reject({reason: "No user Found"})
    }

    const hash = user.password
    // user password either correct or incorrect, return promise
    return await bcrypt.compare(password, hash)
    } catch(err) {
        return new Error('error')
    }
    // no user in database
    

}

userSchema.statics.register = async function(email, password) {

const salt = await bcrypt.genSalt()
const hash = await bcrypt.hash(password, salt)
try {
    const user = await this.create({email, password: hash})
    const userObj = user.toObject()
    delete userObj.password
    return userObj
} catch(err) {
    return new Error('Already registered')
}
}

const User = mongoose.model('Users', userSchema)

module.exports = User