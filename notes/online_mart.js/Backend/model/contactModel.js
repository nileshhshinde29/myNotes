const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({

    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    name: {
        type: String,
        required: [true, "Please provide name"]
    },
    email: {
        type: String,
        required: [true, "Please provide email"]
    },
    password: {
        type: String,
        required: [true, "Please provide password"]
    },
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Contact', contactSchema)