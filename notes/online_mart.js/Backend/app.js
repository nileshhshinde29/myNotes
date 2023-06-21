const express = require('express')
const app = express()

const contactRoute = require('./routes/contactRoute')
const userRoute = require('./routes/userRoute')




//------------------------------------------
app.use(express.json()) // parse the date that we receive form client side to server side.

app.use('/contact', contactRoute)
app.use('/user', userRoute)

app.use((req, res, next) => {
    res.status(200).json({
        message: 'Default running'
    })
})

module.exports = app



