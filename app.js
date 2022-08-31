const mongoose = require('mongoose')
const dotenv = require('dotenv')
const express = require('express')
dotenv.config({path: './config.env'})
const app = express()
const cookieParser = require('cookie-parser')
app.use(cookieParser())

require('./db/connection')

// const User = require('./model/userSchema')
const PORT = process.env.PORT
app.use(express.json())

app.use(require('./router/auth'))

app.use(require('./router/postCar'))

app.use(require('./router/getCars'))

app.use(require('./router/getCurrentUser'))

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}` );
})

