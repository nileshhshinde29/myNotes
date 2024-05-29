const mongoose = require('mongoose')

const companySchema = mongoose.Schema({

    name: {
        type: String,
        // required: [true, "Please provide username"]
    },
    email: {
        type: String,
        // required: [true, "Please provide email"]
    },
    password: {
        type: String,
        // required: [true, "Please provide password"]
    },
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Company', companySchema)