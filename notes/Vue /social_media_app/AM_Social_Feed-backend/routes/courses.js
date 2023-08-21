const router = require('express').Router()

const CourseSchema = require('../models/courses')

router.get('/getCourse', async (req, res) => {
    try {
        CourseSchema.find({ added_by: req.user.id })
            // .populate('added_by', 'username')
            .then((products) => {
                res.status(200).json(products);
            })
    } catch (error) {
        res.status(400).json({ message: 'Something went wrong!' })
    }
})

router.post('/addCourse', async (req, res) => {
    console.log(req.body)

    try {
        const { courseName } = req.body

        if (!courseName) {
            res.status(400);
            throw new Error('validation error')
        }
        const product = await CourseSchema.create({
            courseName,
            added_by: req.user.id,

        })

        res.status(200).json(courseName)
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router