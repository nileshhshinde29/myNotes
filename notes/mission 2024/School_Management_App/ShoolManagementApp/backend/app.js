const express = require('express')
const app = express()
const cors = require('cors');

const userRoute = require('./routes/userRoute')
const profileRoute = require('./routes/profileRoute')
const path = require('path')



//------------------------------------------
app.use(express.json()) // parse the date that we receive form client side to server side.

app.use(cors())
app.use('/images', express.static(path.join(__dirname, "uploads")));
app.use('/user', userRoute)
app.use('/profile', profileRoute)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Default running'
    })
})

module.exports = app



