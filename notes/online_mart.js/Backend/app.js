const express = require('express')
const app = express()
const cors = require('cors');

const contactRoute = require('./routes/contactRoute')
const userRoute = require('./routes/userRoute')
const productRoute = require('./routes/productRoute')
const categoryRoute = require('./routes/categoryRoute')
const sendMail = require('./middleware/mailSender')



//------------------------------------------
app.use(express.json()) // parse the date that we receive form client side to server side.

app.use(cors())

app.use('/contact', contactRoute)
app.use('/user', userRoute)
app.use('/product', productRoute)
app.use('/category', categoryRoute)
app.get('/send-email', sendMail) // ethereal mail sender


app.use((req, res, next) => {
    res.status(404).json({
        message: 'Default running'
    })
})

module.exports = app



