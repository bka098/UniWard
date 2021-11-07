const Lockers = require('../Models/Lockers');
const express = require('express');
const router = express.Router();


router.get(`/`, async (req, res) =>{
    const LockersList = await Lockers.find();

    if(!LockersList) {
        res.status(500).json({success: false})
    } 
    res.status(200).send(LockersList);
})

module.exports = router;