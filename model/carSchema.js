const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    catagory: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    passengerCapacity: {
        type: Number,
        required: true
    },
    transmission: {
        type: String,
        required: true
    },
    fuel: {
        type: String,
        required: true
    },
    tankCapacity: {
        type: Number,
        required: true
    },
    economy: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    images: [
         String
    ],
    ownerId: {
        type: String,
        required: true
    },
    liftFrom: {
        type: String,
        required: true,
    },
    dropTo: {
        type: String,
        required: true,
    }

    
})

const Car = mongoose.model('CAR', carSchema)
module.exports = Car