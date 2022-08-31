const express = require('express')
const router = express.Router()
require('../db/connection')
const Authenticate = require('../middlewere/authenticate') 

router.get('/getCurrentUser', Authenticate,(req,res) => {
    console.log(req.user)
    const {_id, name, email, myCars, myFavouriteCars} = req.user
    res.status(201).json({user: {
        _id,
        name,
        email,
        myCars,
        myFavouriteCars
    }})
})

module.exports = router