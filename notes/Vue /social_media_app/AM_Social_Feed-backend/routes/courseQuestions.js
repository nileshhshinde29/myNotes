const router = require('express').Router()

const CourseQuestionSchema = require('../models/courseQuestions')

router.post('/getQuestions', async (req, res) => {
    console.log('asdasdas', req.body);
    try {
        CourseQuestionSchema.find({ course_id: req.body.course_id })
            // .populate('added_by', 'username')
            .then((products) => {
                res.status(200).json(products);
            })
    } catch (error) {
        res.status(400).json({ message: 'Something went wrong!' })
    }
})

router.post('/addQuestion', async (req, res) => {
    try {
        const { question, answer, course_id } = req.body

        if (!question || !answer || !course_id) {
            res.status(400);
            throw new Error('validation error')
        }
        const createdQuestion = await CourseQuestionSchema.create({
            question,
            answer,
            course_id,
        })
        res.status(200).json(createdQuestion)

    } catch (error) {
        res.status(400).json(error)
    }
})

router.put('/editQuestion:id', async (req, res) => {
    console.log('hiii', req.params.id);

    const question = await CourseQuestionSchema.findById(req.params.id)
    if (!question) {
        return res.status(404).json("not Found")
    }
    try {
        const updatedQuestion = await CourseQuestionSchema.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        return res.status(200).json('Successfully updated')

    } catch (error) {
        return res.status(500).json(error)
    }
})

router.delete('/delete:id', async (req, res) => {

    const question = await CourseQuestionSchema.findById(req.params.id);
    try {
        if (!question) {
            return res.status(404).json("Not Found");
        }

        await CourseQuestionSchema.deleteOne({ _id: req.params.id });
        return res.status(200).json('Successfully deleted');
    } catch (error) {
        return res.status(500).json(error);
    }
})


module.exports = router