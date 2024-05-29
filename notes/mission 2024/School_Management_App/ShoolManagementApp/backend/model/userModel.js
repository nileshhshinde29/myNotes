const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    schoolName: {
        type: String,
        required: [true, "Please provide username"]
    },
    email: {
        type: String,
        required: [true, "Please provide email"]
    },
    password: {
        type: String,
        required: [true, "Please provide password"]
    },
    role: {
        type: String,
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('User', userSchema)