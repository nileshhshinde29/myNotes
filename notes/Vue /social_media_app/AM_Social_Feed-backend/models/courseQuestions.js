const mongoose = require('mongoose')

const CourseQuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

},
    {
        timestamps: true
    })

module.exports = mongoose.model('CourseQuestionSchema', CourseQuestionSchema)